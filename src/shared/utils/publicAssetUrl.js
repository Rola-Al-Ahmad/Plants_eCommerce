/** Resolve a path under Vite's `public/` folder for production (incl. GitHub Pages base). */
export function publicAssetUrl(path) {
  const normalized = path.replace(/^public\//, "").replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
