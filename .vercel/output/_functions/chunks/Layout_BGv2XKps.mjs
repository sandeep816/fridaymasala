import { e as createAstro, f as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, h as addAttribute, o as renderHead, k as renderComponent, p as renderSlot } from './astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro$2 = createAstro("https://fridaymasala.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { title = "Friday Masala - Movie Database" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="bg-gray-900 text-white shadow-lg sticky top-0 z-50"> <div class="container mx-auto px-4 py-4"> <div class="flex items-center justify-between"> <!-- Logo --> <div class="flex items-center space-x-3"> <a href="/" class="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
🎬 Friday Masala
</a> <span class="text-sm text-gray-400 hidden md:block">Your Ultimate Movie Guide</span> </div> <!-- Navigation --> <nav class="hidden md:flex items-center space-x-8"> <a href="/" class="text-gray-300 hover:text-white transition-colors">Home</a> <a href="/movies/popular" class="text-gray-300 hover:text-white transition-colors">Popular</a> <a href="/movies/top-rated" class="text-gray-300 hover:text-white transition-colors">Top Rated</a> <a href="/movies/now-playing" class="text-gray-300 hover:text-white transition-colors">Now Playing</a> <a href="/movies/trending" class="text-gray-300 hover:text-white transition-colors">Trending</a> <a href="/celebrities" class="text-gray-300 hover:text-white transition-colors">Celebrities</a> </nav> <!-- Search Bar --> <div class="flex items-center space-x-4"> <form action="/search" method="GET" class="relative"> <input type="text" name="q" placeholder="Search movies..." class="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-64"> <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
🔍
</button> </form> </div> <!-- Mobile Menu Button --> <button class="md:hidden text-white" id="mobile-menu-btn">
☰
</button> </div> <!-- Mobile Menu --> <div class="md:hidden hidden mt-4" id="mobile-menu"> <nav class="flex flex-col space-y-4"> <a href="/" class="text-gray-300 hover:text-white transition-colors">Home</a> <a href="/movies/popular" class="text-gray-300 hover:text-white transition-colors">Popular</a> <a href="/movies/top-rated" class="text-gray-300 hover:text-white transition-colors">Top Rated</a> <a href="/movies/now-playing" class="text-gray-300 hover:text-white transition-colors">Now Playing</a> <a href="/movies/trending" class="text-gray-300 hover:text-white transition-colors">Trending</a> <a href="/celebrities" class="text-gray-300 hover:text-white transition-colors">Celebrities</a> </nav> </div> </div> </header> ${renderScript($$result, "E:/MyWork/FM/fridaymasala/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/MyWork/FM/fridaymasala/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white mt-16"> <div class="container mx-auto px-4 py-8"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Brand Section --> <div class="col-span-1 md:col-span-2"> <h3 class="text-xl font-bold text-red-500 mb-4">🎬 Friday Masala</h3> <p class="text-gray-400 mb-4">
Your ultimate destination for movie information, reviews, and entertainment news. 
          Discover the latest releases, explore classics, and stay updated with the world of cinema.
</p> <div class="flex space-x-4"> <a href="#" class="text-gray-400 hover:text-white transition-colors">📘 Facebook</a> <a href="#" class="text-gray-400 hover:text-white transition-colors">🐦 Twitter</a> <a href="#" class="text-gray-400 hover:text-white transition-colors">📸 Instagram</a> </div> </div> <!-- Quick Links --> <div> <h4 class="text-lg font-semibold mb-4">Quick Links</h4> <ul class="space-y-2"> <li><a href="/" class="text-gray-400 hover:text-white transition-colors">Home</a></li> <li><a href="/movies/popular" class="text-gray-400 hover:text-white transition-colors">Popular Movies</a></li> <li><a href="/movies/top-rated" class="text-gray-400 hover:text-white transition-colors">Top Rated</a></li> <li><a href="/movies/now-playing" class="text-gray-400 hover:text-white transition-colors">Now Playing</a></li> <li><a href="/movies/trending" class="text-gray-400 hover:text-white transition-colors">Trending</a></li> </ul> </div> <!-- Categories --> <div> <h4 class="text-lg font-semibold mb-4">Categories</h4> <ul class="space-y-2"> <li><a href="/genre/action" class="text-gray-400 hover:text-white transition-colors">Action</a></li> <li><a href="/genre/comedy" class="text-gray-400 hover:text-white transition-colors">Comedy</a></li> <li><a href="/genre/drama" class="text-gray-400 hover:text-white transition-colors">Drama</a></li> <li><a href="/genre/horror" class="text-gray-400 hover:text-white transition-colors">Horror</a></li> <li><a href="/genre/sci-fi" class="text-gray-400 hover:text-white transition-colors">Sci-Fi</a></li> </ul> </div> </div> <!-- Ad Space --> <div class="mt-8 p-4 bg-gray-800 rounded-lg text-center"> <div class="text-gray-400 text-sm mb-2">Advertisement Space</div> <div class="bg-gray-700 h-20 rounded flex items-center justify-center"> <span class="text-gray-500">Google AdSense Banner</span> </div> </div> <!-- Copyright --> <div class="mt-8 pt-8 border-t border-gray-800 text-center"> <p class="text-gray-400">
© ${currentYear} Friday Masala. All rights reserved. 
        Powered by TMDB API. Made with ❤️ for movie lovers.
</p> </div> </div> </footer>`;
}, "E:/MyWork/FM/fridaymasala/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://fridaymasala.com");
const $$AdBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdBanner;
  const { position = "top", size = "banner" } = Astro2.props;
  const adClasses = {
    top: "w-full h-20 bg-gray-700 rounded-lg",
    bottom: "w-full h-20 bg-gray-700 rounded-lg",
    sidebar: "w-full h-60 bg-gray-700 rounded-lg"
  };
  const adClass = adClasses[position];
  return renderTemplate(_a || (_a = __template(["", "<div", '> <div class="text-center"> <div class="mb-1">\u{1F4E2} Advertisement</div> <div class="text-xs text-gray-600">Google AdSense</div> </div> </div> <!-- \n  Google AdSense Code Template:\n  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"\n     crossorigin="anonymous"><\/script>\n  <ins class="adsbygoogle"\n       style="display:block"\n       data-ad-client="ca-pub-YOUR_PUBLISHER_ID"\n       data-ad-slot="YOUR_AD_SLOT"\n       data-ad-format="auto"\n       data-full-width-responsive="true"></ins>\n  <script>\n       (adsbygoogle = window.adsbygoogle || []).push({});\n  <\/script>\n-->'])), maybeRenderHead(), addAttribute(`${adClass} flex items-center justify-center text-gray-500 text-sm`, "class"));
}, "E:/MyWork/FM/fridaymasala/src/components/AdBanner.astro", void 0);

const $$Astro = createAstro("https://fridaymasala.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Your ultimate destination for movies, reviews, and entertainment. Discover the latest releases, explore classics, and stay updated with the world of cinema.", image = "/og-image.jpg" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="bg-gray-100 min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <!-- Top Ad Banner --> <div class="container mx-auto px-4 py-4"> ${renderComponent($$result, "AdBanner", $$AdBanner, { "position": "top" })} </div> <!-- Main Content --> <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- Bottom Ad Banner --> <div class="container mx-auto px-4 py-4"> ${renderComponent($$result, "AdBanner", $$AdBanner, { "position": "bottom" })} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/MyWork/FM/fridaymasala/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
