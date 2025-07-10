import { build } from "esbuild";

build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: "node",
  outfile: "dist/index.js",
  target: "node20",
}).catch(() => process.exit(1));
