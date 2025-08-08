#!/usr/bin/env node
const { execSync } = require('child_process')

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe' }).toString().trim()
}

try {
  // Check for changes
  const status = run('git status --porcelain')
  if (!status) {
    console.log('No changes to commit. Skipping auto-commit.')
    process.exit(0)
  }
  const ts = new Date().toISOString().replace('T', ' ').split('.')[0]
  run('git add -A')
  run(`git commit -m "chore:auto-commit after successful test @ ${ts}"`)
  const branch = run('git rev-parse --abbrev-ref HEAD')
  console.log(run(`git push origin ${branch}`))
  console.log('Auto-commit and push completed.')
} catch (e) {
  console.error('Auto-commit failed:', e.message)
  process.exit(1)
}