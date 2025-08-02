import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_OARH5pAK.mjs';
import 'clsx';
import { g as getImageUrl, k as fetchTrendingMovies, i as fetchPopularMovies, j as fetchTopRatedMovies } from '../chunks/tmdb_BrssP5EA.mjs';
/* empty css                                 */
import { $ as $$MovieCard } from '../chunks/MovieCard_BLhwAnpT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { featuredMovies } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16" data-astro-cid-nlow4r3u> <div class="container mx-auto px-4" data-astro-cid-nlow4r3u> <div class="text-center mb-12" data-astro-cid-nlow4r3u> <h1 class="text-5xl md:text-6xl font-bold mb-4" data-astro-cid-nlow4r3u>
Welcome to <span class="text-red-500" data-astro-cid-nlow4r3u>Friday Masala</span> </h1> <p class="text-xl text-gray-300 mb-8" data-astro-cid-nlow4r3u>
Your ultimate destination for movies, reviews, and entertainment
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-nlow4r3u> <a href="/movies/popular" class="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors" data-astro-cid-nlow4r3u>
Explore Popular Movies
</a> <a href="/movies/trending" class="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors" data-astro-cid-nlow4r3u>
Trending Now
</a> </div> </div> <!-- Featured Movies Carousel --> ${featuredMovies.length > 0 && renderTemplate`<div class="relative" data-astro-cid-nlow4r3u> <h2 class="text-2xl font-bold mb-6 text-center" data-astro-cid-nlow4r3u>Featured Movies</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-nlow4r3u> ${featuredMovies.slice(0, 3).map((movie) => {
    getImageUrl(movie.poster_path, "w500");
    const backdropUrl = getImageUrl(movie.backdrop_path, "w1280");
    const rating = movie.vote_average.toFixed(1);
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
    return renderTemplate`<div class="relative group overflow-hidden rounded-lg shadow-xl" data-astro-cid-nlow4r3u> <a${addAttribute(`/movie/${movie.id}`, "href")} class="block" data-astro-cid-nlow4r3u> <div class="relative h-80" data-astro-cid-nlow4r3u> <img${addAttribute(backdropUrl, "src")}${addAttribute(movie.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-astro-cid-nlow4r3u> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" data-astro-cid-nlow4r3u></div> <!-- Movie Info Overlay --> <div class="absolute bottom-0 left-0 right-0 p-6" data-astro-cid-nlow4r3u> <div class="flex items-center gap-2 mb-2" data-astro-cid-nlow4r3u> <span class="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold" data-astro-cid-nlow4r3u>
⭐ ${rating} </span> <span class="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold" data-astro-cid-nlow4r3u> ${year} </span> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors" data-astro-cid-nlow4r3u> ${movie.title} </h3> <p class="text-gray-300 text-sm line-clamp-2" data-astro-cid-nlow4r3u> ${movie.overview || "No overview available"} </p> </div> </div> </a> </div>`;
  })} </div> </div>`} </div> </section> `;
}, "E:/MyWork/FM/fridaymasala/src/components/HeroSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let trendingMovies = [];
  let popularMovies = [];
  let topRatedMovies = [];
  let usingFallbackData = false;
  try {
    console.log("Starting to fetch data...");
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Data fetch timeout")), 8e3);
    });
    const dataPromise = Promise.all([
      fetchTrendingMovies(),
      fetchPopularMovies(),
      fetchTopRatedMovies()
    ]);
    const result = await Promise.race([
      dataPromise,
      timeoutPromise
    ]);
    [trendingMovies, popularMovies, topRatedMovies] = result;
    console.log("Data fetched successfully");
  } catch (error) {
    console.warn("Using fallback data due to API issues:", error);
    usingFallbackData = true;
    error instanceof Error ? error.message : "Unknown error";
    trendingMovies = popularMovies = topRatedMovies = [];
  }
  const featuredMovies = trendingMovies.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Friday Masala - Your Ultimate Movie Database" }, { "default": async ($$result2) => renderTemplate`${usingFallbackData && renderTemplate`${maybeRenderHead()}<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"> <div class="flex"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <p class="text-sm"> <strong>Network Notice:</strong> Currently showing sample data due to API connectivity issues. 
            The website will automatically update when the connection is restored.
</p> </div> </div> </div>`}${renderComponent($$result2, "HeroSection", $$HeroSection, { "featuredMovies": featuredMovies })}  <section class="py-12 bg-white"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-gray-900">🔥 Popular Movies</h2> <a href="/movies/popular" class="text-red-500 hover:text-red-600 font-semibold">
View All →
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${popularMovies.slice(0, 10).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>  <section class="py-12 bg-gray-50"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-gray-900">⭐ Top Rated Movies</h2> <a href="/movies/top-rated" class="text-red-500 hover:text-red-600 font-semibold">
View All →
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${topRatedMovies.slice(0, 10).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>  <section class="py-12 bg-white"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-gray-900">📈 Trending This Week</h2> <a href="/movies/trending" class="text-red-500 hover:text-red-600 font-semibold">
View All →
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${trendingMovies.slice(0, 10).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>  <section class="py-12 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🎭 Movie Categories</h2> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"> ${[
    { name: "Action", icon: "\u{1F4A5}", href: "/genre/action" },
    { name: "Comedy", icon: "\u{1F602}", href: "/genre/comedy" },
    { name: "Drama", icon: "\u{1F3AD}", href: "/genre/drama" },
    { name: "Horror", icon: "\u{1F47B}", href: "/genre/horror" },
    { name: "Sci-Fi", icon: "\u{1F680}", href: "/genre/sci-fi" },
    { name: "Romance", icon: "\u{1F495}", href: "/genre/romance" },
    { name: "Thriller", icon: "\u{1F631}", href: "/genre/thriller" },
    { name: "Animation", icon: "\u{1F3A8}", href: "/genre/animation" },
    { name: "Documentary", icon: "\u{1F4F9}", href: "/genre/documentary" },
    { name: "Family", icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", href: "/genre/family" },
    { name: "Fantasy", icon: "\u{1F9D9}\u200D\u2642\uFE0F", href: "/genre/fantasy" },
    { name: "Mystery", icon: "\u{1F50D}", href: "/genre/mystery" }
  ].map((category) => renderTemplate`<a${addAttribute(category.href, "href")} class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"> <div class="text-3xl mb-2">${category.icon}</div> <div class="font-semibold text-gray-900 group-hover:text-red-500 transition-colors"> ${category.name} </div> </a>`)} </div> </div> </section> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/index.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
