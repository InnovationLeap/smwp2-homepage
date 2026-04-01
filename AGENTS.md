# AGENTS.md - SMWP 2 Homepage

Guidance for AI coding agents working in this repository.

## Project Overview

SMWP 2 Homepage is an Astro 6 static site for Super Mario Worker Project 2. Uses Tailwind CSS v4, MDX for content, Font Awesome icons, and TypeScript. Package manager is **Bun**. Supports bilingual content (zh-CN / en) via `data-lang` attributes.

## Build & Dev Commands

```bash
bun run dev        # Start dev server (host 0.0.0.0:4321)
bun run build      # Production build
bun run preview    # Preview production build locally
bun run deploy     # Deploy via deploy.sh (Linux server, rsync)
```

- No test framework configured. Do not add tests unless explicitly requested.
- No lint or typecheck commands. TypeScript is handled internally by Astro.
- To verify changes, run `bun run build` to catch compilation errors.

## Project Structure

```
├── public/
│   └── images/            # Static images (logos, icons)
├── src/
│   ├── components/        # Astro components (Navbar.astro, Footer.astro)
│   ├── content/
│   │   └── pages/         # Markdown content split by locale
│   │       ├── zh/        # Chinese content (*.md)
│   │       └── en/        # English content (*.md)
│   ├── content.config.ts  # Content collections (Zod schema, glob loader)
│   ├── layouts/           # BaseLayout.astro
│   ├── pages/             # File-based routing (index.astro, downloads.astro)
│   └── styles/            # global.css (Tailwind, theme, dark mode)
├── astro.config.mjs       # Astro + MDX + Tailwind Vite plugin
└── package.json
```

## Code Style

### Astro Components
- Use `---` frontmatter fences for script/logic sections.
- Define props with `interface Props` in frontmatter. Bilingual sites use suffixes: `titleZh`, `titleEn`, `descriptionZh`, `descriptionEn`.
- Import global styles only in `BaseLayout.astro`, not in every component.
- Use relative imports (`../components/Foo.astro`), not path aliases.
- Keep component logic minimal; prefer declarative templates.

### Internationalization (i18n)
- Content collections are split by locale: `src/content/pages/zh/` and `src/content/pages/en/`.
- Use `data-lang="zh"` and `data-lang="en"` attributes on elements for language visibility toggling.
- Language state is managed via `localStorage` with key `lang` (values: `zh` | `en`).
- Default language is inferred from `navigator.language`; falls back to `zh` if not English.
- Language changes dispatch a `CustomEvent('language-change')` on `window`.

### TypeScript
- Use TypeScript interfaces for component props and data shapes (e.g., `NavItem`, `Props`).
- Keep types inline in component files; no separate `types.ts` files.
- Use Zod schemas in `content.config.ts` for content collection validation.
- In `<script>` tags, add type annotations where supported (e.g., `let hideMenuTimer: number | null = null`).

### Styling
- Primary styling: Tailwind CSS utility classes.
- Dark mode: `html.dark` class toggling via `@custom-variant dark (&:where(.dark, .dark *))` in global.css.
  - Use Tailwind `dark:` variant in templates (e.g., `dark:bg-gray-900 dark:text-gray-300`).
  - Use `html.dark .selector` in `<style is:global>` blocks for complex selectors.
- Custom CSS: Scoped `<style is:global>` blocks for animations/transitions.
- CSS variables: Defined in `@theme` block in `global.css`.
- Responsive: Mobile-first with `md:` breakpoint (768px).

### Formatting & Indentation
- 2-space indentation for all file types (`.astro`, `.ts`, `.js`, `.css`, `.md`).
- UTF-8 charset. Final newline at end of files. Trim trailing whitespace (except `.md`).
- Follow `.editorconfig` rules strictly.
- HTML attributes: one per line when there are many; align vertically for readability.

### Naming Conventions
- Components: PascalCase filenames (`BaseLayout.astro`, `Navbar.astro`).
- Pages: lowercase filenames (`index.astro`, `downloads.astro`).
- CSS classes: kebab-case (`mobile-menu-btn`, `desktop-dropdown-link`).
- Variables/functions: camelCase (`getPreferredTheme`, `setTheme`, `updateLanguage`).
- Constants: UPPER_SNAKE_CASE (`MOBILE_MENU_ANIMATION_DURATION`).
- Interfaces: PascalCase (`NavItem`, `Props`).

### Imports
- Astro imports: `import { getEntry, render } from 'astro:content'`.
- Loader imports: `import { glob } from 'astro/loaders'`.
- Component imports: relative paths, `.astro` extension implied.
- CSS imports: `@import` and `@plugin` directives in `global.css`.
- Import order: Astro/framework first, then components, then utilities.

### JavaScript in `<script>` Tags
- Use `const` and arrow functions. Avoid `var`.
- Null-check DOM elements with `?.` optional chaining.
- Use `querySelectorAll` and `forEach` for multiple elements.
- Prefer `requestAnimationFrame` for DOM transitions.
- Use `window.setTimeout` instead of bare `setTimeout`.
- Use `{ passive: true }` for scroll/resize listeners.

### Accessibility
- Include `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden` on interactive elements.
- Use `sr-only` class for screen-reader-only text.
- External links: always `target="_blank"` and `rel="noopener noreferrer"`.

### Error Handling
- Throw descriptive `Error` objects when content entries are missing.
- Use early returns (`if (!entry) throw ...`) before processing.
- In scripts, guard against null DOM elements with optional chaining.

### Content (Markdown)
- Store content in `src/content/pages/{zh,en}/` as `.md` files.
- Frontmatter must match Zod schema: `title` (required), `description` (optional), `layout` (optional).
- Render content via `await render(entry)` and `<Content />` component.

## Key Dependencies

- `astro` ^6.1.1 - Static site framework
- `@astrojs/mdx` ^5.0.3 - MDX integration
- `tailwindcss` ^4.2.2 - CSS framework
- `@tailwindcss/vite` ^4.2.2 - Tailwind Vite plugin
- `@tailwindcss/typography` ^0.5.19 - Prose styles for article content
- `@fortawesome/fontawesome-free` ^7.2.0 - Icon library (loaded globally via CSS)
- `typescript` ^6.0.2

## Important Notes

- The dev server binds to `0.0.0.0:4321` by default.
- No CI/CD pipeline files exist in the repository.
- Font Awesome is loaded globally via CSS import in global.css, not per-component.
- The `deploy.sh` script runs on a Linux server; it uses `bun run build` and rsync to deploy.
- Dark mode and language preferences persist via `localStorage` (`theme`: `light`|`dark`, `lang`: `zh`|`en`).
