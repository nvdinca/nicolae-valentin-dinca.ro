// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

const cloudflare = defineCloudflareConfig({
	// For best results consider enabling R2 caching
	// See https://opennext.js.org/cloudflare/caching for more details
	// incrementalCache: r2IncrementalCache
});

/**
 * OpenNext runs `npm run build` to compile Next.js. Our root `build` script is the full
 * OpenNext pipeline, so we must point the inner step at `next build` only (`build:next`).
 * Otherwise `npm run build` → opennext → `npm run build` → infinite recursion.
 */
export default {
	...cloudflare,
	buildCommand: "npm run build:next",
};
