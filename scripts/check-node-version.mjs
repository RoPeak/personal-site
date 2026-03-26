const [major, minor] = process.versions.node.split('.').map(Number);

const supported =
  (major === 22 && minor >= 12) ||
  major === 23;

if (!supported) {
  console.error(
    `Unsupported Node.js version ${process.versions.node}. Use Node 22.12+ and below Node 24 for Astro builds in this project.`
  );
  process.exit(1);
}
