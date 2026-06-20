import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "always"
  },
  vite: {
    build: {
      target: "esnext",
      cssMinify: "esbuild"
    }
  }
});
