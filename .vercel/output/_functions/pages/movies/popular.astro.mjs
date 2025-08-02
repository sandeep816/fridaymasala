import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_OARH5pAK.mjs';
import { $ as $$MovieCard } from '../../chunks/MovieCard_BLhwAnpT.mjs';
import { i as fetchPopularMovies } from '../../chunks/tmdb_BrssP5EA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$Popular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Popular;
  const page = parseInt(Astro2.url.searchParams.get("page") || "1");
  const movies = await fetchPopularMovies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Popular Movies - Friday Masala", "description": "Discover the most popular movies of all time. Browse through trending films, blockbusters, and audience favorites." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <!-- Header --> <div class="mb-8"> <h1 class="text-4xl font-bold text-gray-900 mb-4">🔥 Popular Movies</h1> <p class="text-gray-600 text-lg">
Discover the most popular movies that audiences love. From blockbusters to cult classics, 
        find your next favorite film here.
</p> </div> <!-- Movies Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${movies.map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> <!-- Pagination --> <div class="mt-12 flex justify-center"> <nav class="flex items-center space-x-2"> <a${addAttribute(`/movies/popular?page=${Math.max(1, page - 1)}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${page <= 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"}`, "class")}>
← Previous
</a> <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
Page ${page} </span> <a${addAttribute(`/movies/popular?page=${page + 1}`, "href")} class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
Next →
</a> </nav> </div> </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/movies/popular.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/movies/popular.astro";
const $$url = "/movies/popular";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Popular,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
