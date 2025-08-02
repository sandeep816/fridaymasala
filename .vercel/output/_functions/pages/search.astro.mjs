import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment } from '../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRh8Damz.mjs';
import { $ as $$MovieCard } from '../chunks/MovieCard_Ba23vcAk.mjs';
import { s as searchMovies } from '../chunks/tmdb_DNSrHnXo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("q") || "";
  const page = parseInt(Astro2.url.searchParams.get("page") || "1");
  let searchResults = null;
  let totalResults = 0;
  let totalPages = 0;
  if (query.trim()) {
    try {
      const results = await searchMovies(query);
      searchResults = results.results;
      totalResults = results.total_results;
      totalPages = results.total_pages;
    } catch (error) {
      console.error("Search error:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search Results for "${query}" - Friday Masala`, "description": `Search results for "${query}" - Find movies on Friday Masala` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <!-- Search Header --> <div class="mb-8"> <h1 class="text-4xl font-bold text-gray-900 mb-4"> ${query ? `Search Results for "${query}"` : "Search Movies"} </h1> <!-- Search Form --> <form action="/search" method="GET" class="mb-6"> <div class="flex max-w-md"> <input type="text" name="q"${addAttribute(query, "value")} placeholder="Search for movies..." class="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"> <button type="submit" class="px-6 py-3 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors">
🔍 Search
</button> </div> </form> ${query && renderTemplate`<p class="text-gray-600">
Found ${totalResults.toLocaleString()} result${totalResults !== 1 ? "s" : ""} for "${query}"
</p>`} </div> <!-- Search Results --> ${query && searchResults ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${searchResults.length > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${searchResults.map((movie) => renderTemplate`${renderComponent($$result4, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> ${totalPages > 1 && renderTemplate`<div class="mt-12 flex justify-center"> <nav class="flex items-center space-x-2"> <a${addAttribute(`/search?q=${encodeURIComponent(query)}&page=${Math.max(1, page - 1)}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${page <= 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"}`, "class")}>
← Previous
</a> <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
Page ${page} of ${totalPages} </span> <a${addAttribute(`/search?q=${encodeURIComponent(query)}&page=${page + 1}`, "href")}${addAttribute(`px-4 py-2 rounded-lg ${page >= totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"}`, "class")}>
Next →
</a> </nav> </div>`}` })}` : renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">🔍</div> <h2 class="text-2xl font-bold text-gray-900 mb-4">No Results Found</h2> <p class="text-gray-600 mb-6">
Sorry, we couldn't find any movies matching "${query}". 
              Try searching with different keywords.
</p> <div class="space-y-2 text-sm text-gray-500"> <p>💡 Search tips:</p> <ul class="list-disc list-inside space-y-1"> <li>Try using the movie title</li> <li>Search by actor or director name</li> <li>Use genre keywords like "action" or "comedy"</li> <li>Check your spelling</li> </ul> </div> </div>`}` })}` : renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">🎬</div> <h2 class="text-2xl font-bold text-gray-900 mb-4">Search for Movies</h2> <p class="text-gray-600 mb-6">
Enter a movie title, actor name, or genre to find what you're looking for.
</p> <div class="space-y-2 text-sm text-gray-500"> <p>💡 Popular searches:</p> <div class="flex flex-wrap justify-center gap-2 mt-4"> ${["Avengers", "Batman", "Star Wars", "Marvel", "Disney", "Action", "Comedy", "Drama"].map((term) => renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(term)}`, "href")} class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-red-500 hover:text-white transition-colors"> ${term} </a>`)} </div> </div> </div>`} </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/search.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
