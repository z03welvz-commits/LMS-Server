# LMS-Server

Single-file Leave Management System (`index.html`).

## Homepage styling (Tailwind)

The Home page is styled with Tailwind utilities that are prefixed `tw-` and scoped to `#page-home`,
so they cannot affect other pages. The generated CSS is inlined in `index.html` between the
`TW-HOME:START` / `TW-HOME:END` markers (no CDN needed at runtime).

After adding or changing `tw-*` classes in the Home markup or its render functions, rebuild:

```
cd tools/tailwind
npm install
npm run build
```
