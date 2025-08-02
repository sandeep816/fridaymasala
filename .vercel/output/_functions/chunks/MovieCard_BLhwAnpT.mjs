import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getImageUrl } from './tmdb_BrssP5EA.mjs';
/* empty css                         */

const $$Astro = createAstro("https://fridaymasala.com");
const $$MovieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MovieCard;
  const { movie } = Astro2.props;
  const posterUrl = getImageUrl(movie.poster_path);
  const rating = movie.vote_average.toFixed(1);
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group" data-astro-cid-y6otcn7o> <a${addAttribute(`/movie/${movie.id}`, "href")} class="block" data-astro-cid-y6otcn7o> <!-- Movie Poster --> <div class="relative overflow-hidden" data-astro-cid-y6otcn7o> <img${addAttribute(posterUrl, "src")}${addAttribute(movie.title, "alt")} class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-y6otcn7o> <!-- Rating Badge --> <div class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold" data-astro-cid-y6otcn7o>
⭐ ${rating} </div> <!-- Year Badge --> <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold" data-astro-cid-y6otcn7o> ${year} </div> </div> <!-- Movie Info --> <div class="p-4" data-astro-cid-y6otcn7o> <h3 class="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors" data-astro-cid-y6otcn7o> ${movie.title} </h3> <p class="text-gray-400 text-sm line-clamp-3 mb-3" data-astro-cid-y6otcn7o> ${movie.overview || "No overview available"} </p> <!-- Additional Info --> <div class="flex items-center justify-between text-xs text-gray-500" data-astro-cid-y6otcn7o> <span class="flex items-center" data-astro-cid-y6otcn7o>
👥 ${movie.vote_count.toLocaleString()} votes
</span> <span class="flex items-center" data-astro-cid-y6otcn7o>
🌟 ${movie.popularity.toFixed(0)} popularity
</span> </div> </div> </a> </div> `;
}, "E:/MyWork/FM/fridaymasala/src/components/MovieCard.astro", void 0);

export { $$MovieCard as $ };
