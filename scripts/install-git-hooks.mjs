import { execFileSync } from 'node:child_process';
import { chmodSync, existsSync } from 'node:fs';

const hookPath = '.githooks';
const prePushHook = `${hookPath}/pre-push`;

function runGit(args) {
  return execFileSync('git', args, { stdio: 'pipe' }).toString().trim();
}

function tryRunGit(args) {
  try {
    return runGit(args);
  } catch {
    return '';
  }
}

try {
  runGit(['rev-parse', '--is-inside-work-tree']);
} catch {
  process.exit(0);
}

if (!existsSync(prePushHook)) {
  console.warn(`Skipping git hook installation because ${prePushHook} was not found.`);
  process.exit(0);
}

try {
  chmodSync(prePushHook, 0o755);
} catch {
  // Best effort only. Git for Windows can still execute hooks without chmod succeeding here.
}

const currentHooksPath = tryRunGit(['config', '--get', 'core.hooksPath']);

if (currentHooksPath !== hookPath) {
  try {
    execFileSync('git', ['config', 'core.hooksPath', hookPath], { stdio: 'inherit' });
    console.log(`Configured git hooks path to ${hookPath}`);
  } catch {
    console.warn('Unable to configure core.hooksPath automatically. Run `git config core.hooksPath .githooks` manually.');
  }
}
