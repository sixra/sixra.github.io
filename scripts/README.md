# GitHub Repository Setup Scripts

## setup-github-rules.sh

Configures GitHub repository settings for clean history and quality control.

### What it does

**Merge Strategy:**

- ✅ Squash merge only (cleanest history)
- ❌ Disables merge commits (creates messy "Merge PR #123" commits)
- ❌ Disables rebase merge (optional - enable if you want all commits)
- 📝 Uses PR title as commit message

**Branch Protection (main):**

- ✅ Requires CI checks to pass: `test`, `lighthouse-pr`, `commitlint`
- ✅ Branch must be up-to-date with main
- ❌ No force pushes to main
- ❌ No deletions of main branch

### Usage

```bash
chmod +x scripts/setup-github-rules.sh
./scripts/setup-github-rules.sh
```

**Requirements:**

- GitHub CLI (`gh`) installed and authenticated
- Admin access to the repository

### Manual Setup

If you prefer using the GitHub UI:

**Settings → General → Pull Requests:**

```
☑ Allow squash merging
  ☑ Default to pull request title
☐ Allow merge commits
☐ Allow rebase merging
```

**Settings → Branches → Add rule for `main`:**

```
Branch name pattern: main

☑ Require status checks to pass before merging
  ☑ Require branches to be up to date before merging
  Required checks:
    ☑ test
    ☑ lighthouse-pr
    ☑ commitlint

☑ Do not allow bypassing the above settings
```

### Important Notes

1. **Status checks must run first:** Create a PR and let CI run before branch protection will work
2. **You can bypass as admin:** Set `enforce_admins: true` in the script if you want strict mode
3. **Linear history:** Squash merge ensures clean git history (one commit per feature)

### Merge Strategy Comparison

| Strategy         | Pros                             | Cons                     | Use Case                         |
| ---------------- | -------------------------------- | ------------------------ | -------------------------------- |
| **Squash**       | Clean history, one commit per PR | Loses individual commits | Personal projects, clean history |
| **Rebase**       | Preserves all commits            | Can create messy history | Teams wanting full history       |
| **Merge commit** | Preserves everything             | Very messy history       | Not recommended                  |

**Recommendation:** Squash merge for personal projects (already configured)
