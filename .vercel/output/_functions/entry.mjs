import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BSUU8-jN.mjs';
import { manifest } from './manifest_B4Q87Dct.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/actor/_id_.astro.mjs');
const _page3 = () => import('./pages/api/test.astro.mjs');
const _page4 = () => import('./pages/celebrities.astro.mjs');
const _page5 = () => import('./pages/health.astro.mjs');
const _page6 = () => import('./pages/movie/_id_.astro.mjs');
const _page7 = () => import('./pages/movies/now-playing.astro.mjs');
const _page8 = () => import('./pages/movies/popular.astro.mjs');
const _page9 = () => import('./pages/movies/top-rated.astro.mjs');
const _page10 = () => import('./pages/movies/trending.astro.mjs');
const _page11 = () => import('./pages/search.astro.mjs');
const _page12 = () => import('./pages/sitemap.xml.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/actor/[id].astro", _page2],
    ["src/pages/api/test.astro", _page3],
    ["src/pages/celebrities.astro", _page4],
    ["src/pages/health.astro", _page5],
    ["src/pages/movie/[id].astro", _page6],
    ["src/pages/movies/now-playing.astro", _page7],
    ["src/pages/movies/popular.astro", _page8],
    ["src/pages/movies/top-rated.astro", _page9],
    ["src/pages/movies/trending.astro", _page10],
    ["src/pages/search.astro", _page11],
    ["src/pages/sitemap.xml.ts", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "091a7cbc-528b-4e45-8940-761e68194322",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
