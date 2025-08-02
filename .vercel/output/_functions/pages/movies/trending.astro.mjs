import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BGv2XKps.mjs';
import { $ as $$MovieCard } from '../../chunks/MovieCard_BaOmhgor.mjs';
import { k as fetchTrendingMovies } from '../../chunks/tmdb_D_ujDLKT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$Trending = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trending;
  const page = parseInt(Astro2.url.searchParams.get("page") || "1");
  const movies = await fetchTrendingMovies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Trending Movies - Friday Masala", "description": "Stay updated with the latest trending movies. Discover what's hot right now in the world of cinema." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <!-- Header --> <div class="mb-8"> <h1 class="text-4xl font-bold text-gray-900 mb-4">📈 Trending Movies</h1> <p class="text-gray-600 text-lg">
Stay updated with the latest trending movies that everyone is talking about. 
        Discover what's hot right now in the world of cinema.
</p> </div> <!-- Movies Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${movies.map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> <!-- Pagination --> <div class="mt-12 flex justify-center"> <nav class="flex items-center space-x-2"> <a${addAttribute(`/movies/trending?page=${Math.max(1, page - 1)}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${page <= 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"}`, "class")}>
← Previous
</a> <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
Page ${page} </span> <a${addAttribute(`/movies/trending?page=${page + 1}`, "href")} class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
Next →
</a> </nav> </div> </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/movies/trending.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/movies/trending.astro";
const $$url = "/movies/trending";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Trending,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
