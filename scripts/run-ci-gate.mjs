import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

function compareSemverDesc(a, b) {
  const aParts = a.split('.').map(Number);
  const bParts = b.split('.').map(Number);

  for (let i = 0; i < Math.max(aParts.length, bParts.length); i += 1) {
    const aPart = aParts[i] ?? 0;
    const bPart = bParts[i] ?? 0;

    if (aPart !== bPart) {
      return bPart - aPart;
    }
  }

  return 0;
}

function resolvePreferredNpm() {
  if (process.platform !== 'win32') {
    return { command: 'npm', args: ['run', 'ci'], extraPath: null };
  }

  const programsDir = process.env.LOCALAPPDATA
    ? join(process.env.LOCALAPPDATA, 'Programs')
    : null;

  if (!programsDir || !existsSync(programsDir)) {
    return { command: 'npm', args: ['run', 'ci'], extraPath: null };
  }

  const node22Install = readdirSync(programsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^node-v22\.\d+\.\d+-win-x64$/.test(entry.name))
    .map((entry) => entry.name.replace(/^node-v/, '').replace(/-win-x64$/, ''))
    .sort(compareSemverDesc)[0];

  if (!node22Install) {
    return { command: 'npm', args: ['run', 'ci'], extraPath: null };
  }

  const nodeDir = join(programsDir, `node-v${node22Install}-win-x64`);
  const npmCmd = join(nodeDir, 'npm.cmd');

  if (!existsSync(npmCmd)) {
    return { command: 'npm', args: ['run', 'ci'], extraPath: null };
  }

  return {
    command: 'cmd.exe',
    args: ['/d', '/s', '/c', `${npmCmd} run ci`],
    extraPath: nodeDir,
  };
}

const { command, args, extraPath } = resolvePreferredNpm();
const env = { ...process.env };

if (extraPath) {
  env.PATH = `${extraPath};${env.PATH ?? ''}`;
}

console.log('Running local CI gate before push...');

const result = spawnSync(command, args, {
  stdio: 'inherit',
  shell: false,
  env,
});

if (result.error) {
  console.error(result.error.message);
}

if (result.status !== 0) {
  console.error('Push blocked: local CI gate failed.');
  process.exit(result.status ?? 1);
}
