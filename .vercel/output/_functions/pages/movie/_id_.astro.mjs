import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BGv2XKps.mjs';
import { c as fetchMovieDetails, d as fetchMovieCredits, g as getImageUrl, e as getBackdropUrl } from '../../chunks/tmdb_D_ujDLKT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://fridaymasala.com");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const movieId = parseInt(id);
  if (isNaN(movieId)) {
    return Astro2.redirect("/404");
  }
  let movieDetails = null;
  let movieCredits = null;
  let posterUrl = "/placeholder-movie.jpg";
  let backdropUrl = "/placeholder-backdrop.jpg";
  let rating = "N/A";
  let year = "N/A";
  let runtime = "N/A";
  let budget = "N/A";
  let revenue = "N/A";
  let topCast = [];
  let directors = [];
  let writers = [];
  try {
    [movieDetails, movieCredits] = await Promise.all([
      fetchMovieDetails(movieId),
      fetchMovieCredits(movieId)
    ]);
    if (movieDetails && movieCredits) {
      posterUrl = getImageUrl(movieDetails.poster_path, "w500");
      backdropUrl = getBackdropUrl(movieDetails.backdrop_path, "w1280");
      rating = movieDetails.vote_average.toFixed(1);
      year = movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear().toString() : "N/A";
      runtime = movieDetails.runtime ? `${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m` : "N/A";
      budget = movieDetails.budget ? `$${(movieDetails.budget / 1e6).toFixed(1)}M` : "N/A";
      revenue = movieDetails.revenue ? `$${(movieDetails.revenue / 1e6).toFixed(1)}M` : "N/A";
      topCast = movieCredits.cast.slice(0, 10);
      directors = movieCredits.crew.filter((person) => person.job === "Director");
      writers = movieCredits.crew.filter((person) => person.job === "Writer" || person.job === "Screenplay");
    }
  } catch (error) {
    console.warn("Failed to fetch movie details:", error);
  }
  if (!movieDetails) {
    movieDetails = {
      id: 550,
      title: "Fight Club",
      overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.",
      poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      backdrop_path: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
      release_date: "1999-10-15",
      vote_average: 8.8,
      vote_count: 26280,
      genre_ids: [18],
      adult: false,
      original_language: "en",
      original_title: "Fight Club",
      popularity: 61.416,
      video: false,
      genres: [{ id: 18, name: "Drama" }],
      runtime: 139,
      status: "Released",
      budget: 63e6,
      revenue: 100853753,
      production_companies: [{ id: 1, name: "20th Century Fox", logo_path: null }],
      spoken_languages: [{ english_name: "English", iso_639_1: "en" }],
      homepage: "",
      tagline: "Mischief. Mayhem. Soap."
    };
    posterUrl = getImageUrl(movieDetails.poster_path, "w500");
    backdropUrl = getBackdropUrl(movieDetails.backdrop_path, "w1280");
    rating = movieDetails.vote_average.toFixed(1);
    year = movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear().toString() : "N/A";
    runtime = movieDetails.runtime ? `${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m` : "N/A";
    budget = movieDetails.budget ? `$${(movieDetails.budget / 1e6).toFixed(1)}M` : "N/A";
    revenue = movieDetails.revenue ? `$${(movieDetails.revenue / 1e6).toFixed(1)}M` : "N/A";
    topCast = [
      { id: 1, name: "Brad Pitt", character: "Tyler Durden", profile_path: null, order: 0 },
      { id: 2, name: "Edward Norton", character: "The Narrator", profile_path: null, order: 1 }
    ];
    directors = [{ id: 1, name: "David Fincher", job: "Director", department: "Directing", profile_path: null }];
    writers = [{ id: 1, name: "Chuck Palahniuk", job: "Writer", department: "Writing", profile_path: null }];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${movieDetails.title} (${year}) - Friday Masala`, "description": movieDetails.overview }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative h-96 md:h-[500px] overflow-hidden"> <img${addAttribute(backdropUrl, "src")}${addAttribute(movieDetails.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div> <!-- Movie Info Overlay --> <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8"> <div class="container mx-auto"> <div class="flex flex-col md:flex-row gap-6"> <!-- Poster --> <div class="flex-shrink-0"> <img${addAttribute(posterUrl, "src")}${addAttribute(movieDetails.title, "alt")} class="w-48 h-72 object-cover rounded-lg shadow-xl"> </div> <!-- Movie Info --> <div class="flex-1 text-white"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${movieDetails.title}</h1> <div class="flex flex-wrap items-center gap-4 mb-4 text-sm"> <span class="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
⭐ ${rating}/10
</span> <span class="bg-red-500 text-white px-3 py-1 rounded-full"> ${year} </span> <span class="bg-blue-500 text-white px-3 py-1 rounded-full"> ${runtime} </span> ${movieDetails.adult && renderTemplate`<span class="bg-red-600 text-white px-3 py-1 rounded-full">
R
</span>`} </div> <div class="flex flex-wrap gap-2 mb-4"> ${movieDetails.genres.map((genre) => renderTemplate`<span class="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"> ${genre.name} </span>`)} </div> ${movieDetails.tagline && renderTemplate`<p class="text-gray-300 italic mb-4">"${movieDetails.tagline}"</p>`} <p class="text-gray-200 leading-relaxed max-w-2xl"> ${movieDetails.overview} </p> </div> </div> </div> </div> </div>  <div class="container mx-auto px-4 py-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Content --> <div class="lg:col-span-2"> <!-- Cast Section --> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">🎭 Cast</h2> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> ${topCast.map((actor) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(actor.profile_path ? getImageUrl(actor.profile_path, "w185") : "/placeholder-actor.jpg", "src")}${addAttribute(actor.name, "alt")} class="w-full h-48 object-cover"> <div class="p-3"> <h3 class="font-semibold text-gray-900 text-sm">${actor.name}</h3> <p class="text-gray-600 text-xs">${actor.character}</p> </div> </div>`)} </div> </section> <!-- Crew Section --> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">🎬 Crew</h2> <div class="space-y-4"> ${directors.length > 0 && renderTemplate`<div> <h3 class="text-lg font-semibold text-gray-800 mb-2">Director${directors.length > 1 ? "s" : ""}</h3> <div class="flex flex-wrap gap-2"> ${directors.map((director) => renderTemplate`<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"> ${director.name} </span>`)} </div> </div>`} ${writers.length > 0 && renderTemplate`<div> <h3 class="text-lg font-semibold text-gray-800 mb-2">Writer${writers.length > 1 ? "s" : ""}</h3> <div class="flex flex-wrap gap-2"> ${writers.map((writer) => renderTemplate`<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"> ${writer.name} </span>`)} </div> </div>`} </div> </section> </div> <!-- Sidebar --> <div class="lg:col-span-1"> <!-- Movie Stats --> <div class="bg-white rounded-lg shadow-md p-6 mb-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">📊 Movie Stats</h3> <div class="space-y-3"> <div class="flex justify-between"> <span class="text-gray-600">Rating:</span> <span class="font-semibold">⭐ ${rating}/10</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Votes:</span> <span class="font-semibold">${movieDetails.vote_count.toLocaleString()}</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Runtime:</span> <span class="font-semibold">${runtime}</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Budget:</span> <span class="font-semibold">${budget}</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Revenue:</span> <span class="font-semibold">${revenue}</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Status:</span> <span class="font-semibold">${movieDetails.status}</span> </div> </div> </div> <!-- Production Companies --> ${movieDetails.production_companies.length > 0 && renderTemplate`<div class="bg-white rounded-lg shadow-md p-6 mb-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">🏢 Production Companies</h3> <div class="space-y-2"> ${movieDetails.production_companies.map((company) => renderTemplate`<div class="flex items-center gap-2"> ${company.logo_path && renderTemplate`<img${addAttribute(getImageUrl(company.logo_path, "w92"), "src")}${addAttribute(company.name, "alt")} class="w-8 h-8 object-contain">`} <span class="text-sm text-gray-700">${company.name}</span> </div>`)} </div> </div>`} <!-- Languages --> ${movieDetails.spoken_languages.length > 0 && renderTemplate`<div class="bg-white rounded-lg shadow-md p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">🌍 Languages</h3> <div class="flex flex-wrap gap-2"> ${movieDetails.spoken_languages.map((lang) => renderTemplate`<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"> ${lang.english_name} </span>`)} </div> </div>`} </div> </div> </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/movie/[id].astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/movie/[id].astro";
const $$url = "/movie/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
