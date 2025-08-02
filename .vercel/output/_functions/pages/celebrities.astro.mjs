import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BGv2XKps.mjs';
import 'clsx';
import { g as getImageUrl, b as fetchPopularActors } from '../chunks/tmdb_D_ujDLKT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$ActorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ActorCard;
  const { actor } = Astro2.props;
  const profileUrl = getImageUrl(actor.profile_path, "w185");
  const knownForMovie = actor.known_for[0];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group relative"> <a${addAttribute(`/actor/${actor.id}`, "href")} class="block absolute inset-0 z-10"${addAttribute(`View ${actor.name}'s profile`, "aria-label")}> <span class="sr-only">View ${actor.name}'s profile</span> </a> <div class="relative"> <img${addAttribute(profileUrl, "src")}${addAttribute(actor.name, "alt")} class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> <div class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold z-20">
⭐ ${actor.popularity.toFixed(0)} </div> </div> <div class="p-4"> <h3 class="font-semibold text-gray-900 text-lg mb-2 group-hover:text-red-500 transition-colors"> ${actor.name} </h3> <p class="text-gray-600 text-sm mb-3"> ${actor.known_for_department} </p> ${knownForMovie && renderTemplate`<div class="text-xs text-gray-500"> <p class="font-medium">Known for:</p> <p class="truncate">${knownForMovie.title}</p> </div>`} </div> </div>`;
}, "E:/MyWork/FM/fridaymasala/src/components/ActorCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Celebrities = createComponent(async ($$result, $$props, $$slots) => {
  let popularActors = [];
  let usingFallbackData = false;
  try {
    popularActors = await fetchPopularActors();
  } catch (error) {
    console.warn("Using fallback data due to API issues:", error);
    usingFallbackData = true;
    popularActors = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Celebrities - Friday Masala", "description": "Discover the most popular actors and celebrities in the film industry." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["", ' <div class="bg-gradient-to-r from-red-600 to-red-800 text-white py-16"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-4">\u{1F31F} Celebrities</h1> <p class="text-xl md:text-2xl mb-8">Discover the most popular actors and celebrities in Hollywood</p> <div class="flex justify-center space-x-4"> <div class="bg-white/20 rounded-lg px-6 py-3"> <div class="text-2xl font-bold">', '</div> <div class="text-sm">Celebrities</div> </div> <div class="bg-white/20 rounded-lg px-6 py-3"> <div class="text-2xl font-bold">\u2B50</div> <div class="text-sm">Top Rated</div> </div> </div> </div> </div>  <section class="py-12 bg-gray-50"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-gray-900">\u{1F3AD} Popular Celebrities</h2> <div class="text-gray-600">\nShowing ', ' celebrities\n</div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ', " </div> ", ' </div> </section>  <div class="py-8 bg-white"> <div class="container mx-auto px-4"> <div class="bg-gray-200 rounded-lg p-8 text-center"> <h3 class="text-lg font-semibold text-gray-700 mb-2">Advertisement</h3> <p class="text-gray-600">Ad space for Google AdSense</p> <div class="mt-4 text-sm text-gray-500"> <!-- Google AdSense Code Here --> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"><\/script> </div> </div> </div> </div> '])), usingFallbackData && renderTemplate`${maybeRenderHead()}<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"> <div class="flex"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <p class="text-sm"> <strong>Network Notice:</strong> Currently showing sample data due to API connectivity issues. 
            The website will automatically update when the connection is restored.
</p> </div> </div> </div>`, popularActors.length, popularActors.length, popularActors.map((actor) => renderTemplate`${renderComponent($$result2, "ActorCard", $$ActorCard, { "actor": actor })}`), popularActors.length === 0 && renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">🎬</div> <h3 class="text-xl font-semibold text-gray-900 mb-2">No Celebrities Found</h3> <p class="text-gray-600">Try refreshing the page or check back later.</p> </div>`) })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/celebrities.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/celebrities.astro";
const $$url = "/celebrities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Celebrities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
