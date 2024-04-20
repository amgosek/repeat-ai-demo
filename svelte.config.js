import adapter from '@sveltejs/adapter-static'; // Import adapter-static instead of adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    kit: {
        adapter: adapter({
            // Default options are fine for most static sites
            pages: 'build', // Output directory for static pages
            assets: 'build', // Output directory for assets
            fallback: 'index.html',
            precompress: false
        })
    },
    preprocess: vitePreprocess(),
};

export default config;

