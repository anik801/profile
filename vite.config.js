import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: set `base` to "/YOUR-REPO-NAME/" (with leading and trailing
// slashes) so assets resolve correctly on GitHub Pages, e.g.
//   base: "/portfolio-site/"
// If you deploy to a *username.github.io* root repo instead, use "/".
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-site/",
});
