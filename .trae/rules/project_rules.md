You are working on a VitePress project.

General:
- The package manager is bun. Use `bun install`, `bun add`, `bun run`.
- Do NOT suggest npm, yarn, or pnpm unless explicitly asked.
- Use modern ES modules and TypeScript where applicable.
- Default language is Simplified Chinese.

VitePress:
- This is a VitePress 2.x project.
- The VitePress config directory is located at `docs/.vitepress/`.
- The main config file is `docs/.vitepress/config.mts`.
- Theme customization lives in `docs/.vitepress/theme/`.

Documentation:
- All documentation content lives under `docs/`.
- Markdown files are rendered by VitePress, not a generic Markdown parser.
- Preserve existing frontmatter unless changes are explicitly requested.
- Keep heading hierarchy logical (##, ###).

Safety:
- If the request could affect site structure or navigation, ask for confirmation first.
