## FEATURE:

Set up a complete Next.js context engineering repository with TypeScript, Tailwind CSS, shadcn/ui, Pinecone, Claude API, and LangChain integration. This should include the complete testing infrastructure (Jest + RTL, Playwright, MSW) and context engineering workflow adapted for frontend development.

## EXAMPLES:

Create comprehensive examples showing:
- `examples/components/` - shadcn/ui component patterns and custom React components
- `examples/hooks/` - Custom React hooks for Claude API, LangChain, and Pinecone integration
- `examples/context/` - Context providers for Claude, conversation state, and memory management
- `examples/pages/` - Next.js App Router page patterns
- `examples/api/` - API route patterns for Claude and Pinecone integration
- `examples/types/` - TypeScript interface definitions for the entire system

## DOCUMENTATION:

- Next.js 14+ App Router: https://nextjs.org/docs/app
- TypeScript: https://www.typescriptlang.org/docs/
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs
- Claude API: https://docs.anthropic.com/en/api
- LangChain.js: https://js.langchain.com/docs/
- Pinecone: https://docs.pinecone.io/docs/quickstart
- Jest + RTL: https://testing-library.com/docs/react-testing-library/intro/
- Playwright: https://playwright.dev/docs/intro
- Mock Service Worker: https://mswjs.io/docs/

## OTHER CONSIDERATIONS:

- Use pnpm as package manager
- Set up absolute imports with TypeScript path mapping (@/components, @/lib, etc.)
- Include comprehensive ESLint and Prettier configuration
- Set up proper environment variable handling with .env.example
- Create test utilities for context providers and AI integrations
- Include validation commands that can be run from Claude Code
- Set up the .claude/ directory with commands adapted for Next.js workflows
- Ensure all components are accessible (ARIA labels, keyboard navigation)
- Include error boundaries for AI API failures
- Set up proper loading states and error handling patterns