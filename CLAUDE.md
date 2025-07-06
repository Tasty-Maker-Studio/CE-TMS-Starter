### 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of new conversations (when it exists)
- **Check `TASK.md`** before starting new tasks (when it exists)
- **Use consistent Next.js/React/TypeScript patterns** as described in examples/
- **Use pnpm** as the package manager for all operations

### 🧱 Code Structure & Modularity
- **Component files max 200 lines** - split into smaller components if longer
- **Custom hooks in separate files** - one hook per file in hooks/
- **TypeScript everywhere** - no JavaScript files except config
- **Consistent imports** - absolute imports with @ paths, relative for same directory

### 🧪 Testing & Reliability
- **Jest + React Testing Library** for component tests
- **Playwright** for E2E tests
- **MSW** for API mocking
- **Test every component** with at least happy path, error state, loading state

### ✅ Task Completion
- **Run validation commands** after each implementation
- **Fix all TypeScript errors** before proceeding
- **Ensure accessibility** (ARIA labels, keyboard navigation)

### 📎 Style & Conventions
- **Next.js 14+ App Router** - no Pages Router
- **TypeScript strict mode** - no any/unknown types
- **Tailwind CSS** for all styling
- **shadcn/ui** for base components
- **Prettier + ESLint** configured and followed

### 🧠 AI Behavior Rules
- **Never assume missing context** - ask questions if uncertain
- **Always validate with commands** - run tests, lint, type-check
- **Follow existing patterns** - check examples/ directory first
- **Include proper error handling** - loading states, error boundaries