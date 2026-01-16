# Contributing

## Development Setup

```bash
pnpm install
pnpm dev
```

## Code Standards

### Commits

**Required:** [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>: <description>`

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`, `wip`

```bash
feat: Add dark mode toggle
fix: Resolve header alignment
wip: Experimenting with animations
```

Enforced via commitlint hook.

### Code Quality

- **TypeScript:** Strict mode, no `any` types
- **ESLint:** Must pass (auto-fixed on commit)
- **Prettier:** Auto-formatted on commit
- **Tests:** Write tests for utility functions

### Pull Requests

**Required before merge:**

- ✅ All tests pass (`pnpm test`)
- ✅ Build succeeds (`pnpm build`)
- ✅ Lighthouse CI passes (Performance 90%+, A11y 95%+)
- ✅ No linting errors
- ✅ Type check passes (`pnpm astro check`)

**Performance budgets enforced:**

- FCP: 1500ms, LCP: 2500ms, TBT: 1500ms
- Total size: 300KB max

## Testing

```bash
pnpm test              # Unit tests
pnpm test:coverage     # Coverage report
pnpm test:e2e          # E2E tests (requires: npx playwright install)
```

## Git Hooks

- **pre-commit:** Runs lint-staged (ESLint + Prettier on changed files)
- **commit-msg:** Validates commit message format

## Project Conventions

- Place blog images in `public/images/blog/`
- Use semantic HTML and ARIA attributes
- Optimize images before committing
- Follow existing component patterns
- Keep functions small and focused
