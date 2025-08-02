import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BGv2XKps.mjs';
import { $ as $$MovieCard } from '../../chunks/MovieCard_BaOmhgor.mjs';
import { h as fetchNowPlayingMovies } from '../../chunks/tmdb_D_ujDLKT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$NowPlaying = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NowPlaying;
  const page = parseInt(Astro2.url.searchParams.get("page") || "1");
  const movies = await fetchNowPlayingMovies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Now Playing Movies - Friday Masala", "description": "Discover movies currently playing in theaters. Find the latest releases and new films." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <!-- Header --> <div class="mb-8"> <h1 class="text-4xl font-bold text-gray-900 mb-4">🎬 Now Playing</h1> <p class="text-gray-600 text-lg">
Discover movies currently playing in theaters around the world. Find the latest releases 
        and new films that are making waves.
</p> </div> <!-- Movies Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${movies.map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> <!-- Pagination --> <div class="mt-12 flex justify-center"> <nav class="flex items-center space-x-2"> <a${addAttribute(`/movies/now-playing?page=${Math.max(1, page - 1)}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${page <= 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"}`, "class")}>
← Previous
</a> <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
Page ${page} </span> <a${addAttribute(`/movies/now-playing?page=${page + 1}`, "href")} class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
Next →
</a> </nav> </div> </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/movies/now-playing.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/movies/now-playing.astro";
const $$url = "/movies/now-playing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NowPlaying,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
