# everythingzaroori.com

Landing page for the EverythingZaroori suite of everyday web apps. Plain HTML, CSS and JS with no build step, hosted on GitHub Pages.

## Files

- `index.html`: the page, plus the SVG illustration sprite (`<symbol id="i-…">`) at the top
- `styles.css`: design tokens (colours, fonts) live in `:root`
- `script.js`: hero tile animation and the SIP calculator preview
- `CNAME`: custom domain for GitHub Pages
- `404.html`: not-found page

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Adding an app

In the `#apps` grid, turn the app's `<article class="app">` into `<a class="app" href="…">` and swap its pill to `<span class="pill pill-live">Live</span>`.

## Adding an illustration

Add a `<symbol id="i-name" viewBox="0 0 100 100">` to the sprite. Paths with no `fill` get the paper colour, `fill="currentColor"` gives a solid ink accent, and `fill="none"` is for plain lines. Use it with `<svg class="ill"><use href="#i-name"/></svg>`.

## Deploying (GitHub Pages)

1. Push to `main` on GitHub.
2. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main` / `/ (root)`.
3. Custom domain: `everythingzaroori.com` (already set by the `CNAME` file). Tick **Enforce HTTPS** once it's available.
4. At your DNS provider:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www`: `<your-github-username>.github.io`
