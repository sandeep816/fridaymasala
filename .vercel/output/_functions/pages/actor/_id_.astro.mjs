import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_OARH5pAK.mjs';
import { f as fetchActorDetails, a as fetchActorCredits, g as getImageUrl } from '../../chunks/tmdb_BrssP5EA.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://fridaymasala.com");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const actorId = parseInt(id);
  if (isNaN(actorId)) {
    return Astro2.redirect("/404");
  }
  let actorDetails = null;
  let actorCredits = null;
  let profileUrl = "/placeholder-actor.jpg";
  let age = "N/A";
  let topMovies = [];
  try {
    [actorDetails, actorCredits] = await Promise.all([
      fetchActorDetails(actorId),
      fetchActorCredits(actorId)
    ]);
    if (actorDetails && actorCredits) {
      profileUrl = getImageUrl(actorDetails.profile_path, "w500");
      if (actorDetails.birthday) {
        const birthDate = new Date(actorDetails.birthday);
        const today = /* @__PURE__ */ new Date();
        const ageDiff = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        age = monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate() ? (ageDiff - 1).toString() : ageDiff.toString();
      }
      topMovies = actorCredits.cast.slice(0, 10);
    }
  } catch (error) {
    console.warn("Failed to fetch actor details:", error);
  }
  if (!actorDetails) {
    actorDetails = {
      id: 31,
      name: "Tom Hanks",
      biography: "Tom Hanks is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.",
      birthday: "1956-07-09",
      deathday: null,
      place_of_birth: "Concord, California, USA",
      profile_path: "/pQFoyx7rp09CJTAb932F2g8Nlho.jpg",
      popularity: 84,
      known_for_department: "Acting",
      gender: 2,
      homepage: "https://www.tomhanks.com",
      imdb_id: "nm0000158"
    };
    profileUrl = getImageUrl(actorDetails.profile_path, "w500");
    age = "67";
    topMovies = [
      {
        id: 13,
        title: "Forrest Gump",
        character: "Forrest Gump",
        poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        release_date: "1994-07-06",
        vote_average: 8.8,
        overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events."
      },
      {
        id: 550,
        title: "Fight Club",
        character: "Tyler Durden",
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        release_date: "1999-10-15",
        vote_average: 8.8,
        overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy."
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${actorDetails.name} - Friday Masala`, "description": actorDetails.biography }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row gap-8 items-center"> <!-- Profile Image --> <div class="flex-shrink-0"> <img', "", ' class="w-64 h-96 object-cover rounded-lg shadow-xl"> </div> <!-- Actor Info --> <div class="flex-1"> <h1 class="text-4xl md:text-5xl font-bold mb-4">', '</h1> <div class="flex flex-wrap items-center gap-4 mb-6 text-sm"> <span class="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">\n\u2B50 ', " Popularity\n</span> ", ' <span class="bg-green-500 text-white px-3 py-1 rounded-full"> ', " </span> </div> ", " ", " ", ' </div> </div> </div> </div>  <div class="container mx-auto px-4 py-8"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Content --> <div class="lg:col-span-2"> <!-- Biography --> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">\u{1F4D6} Biography</h2> <div class="bg-white rounded-lg shadow-md p-6"> <p class="text-gray-700 leading-relaxed"> ', ' </p> </div> </section> <!-- Filmography --> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">\u{1F3AC} Filmography</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ', ' </div> </section> </div> <!-- Sidebar --> <div class="lg:col-span-1"> <!-- Actor Stats --> <div class="bg-white rounded-lg shadow-md p-6 mb-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">\u{1F4CA} Actor Stats</h3> <div class="space-y-3"> <div class="flex justify-between"> <span class="text-gray-600">Popularity:</span> <span class="font-semibold">\u2B50 ', '</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Age:</span> <span class="font-semibold">', '</span> </div> <div class="flex justify-between"> <span class="text-gray-600">Department:</span> <span class="font-semibold">', "</span> </div> ", ' </div> </div> <!-- Ad Banner --> <div class="bg-gray-200 rounded-lg p-6 text-center"> <h3 class="text-lg font-semibold text-gray-700 mb-2">Advertisement</h3> <p class="text-gray-600">Ad space for Google AdSense</p> <div class="mt-4 text-sm text-gray-500"> <!-- Google AdSense Code Here --> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"><\/script> </div> </div> </div> </div> </div> '])), maybeRenderHead(), addAttribute(profileUrl, "src"), addAttribute(actorDetails.name, "alt"), actorDetails.name, actorDetails.popularity.toFixed(0), age !== "N/A" && renderTemplate`<span class="bg-blue-500 text-white px-3 py-1 rounded-full"> ${age} years old
</span>`, actorDetails.known_for_department, actorDetails.place_of_birth && renderTemplate`<p class="text-gray-300 mb-4"> <span class="font-semibold">Birthplace:</span> ${actorDetails.place_of_birth} </p>`, actorDetails.birthday && renderTemplate`<p class="text-gray-300 mb-4"> <span class="font-semibold">Birthday:</span> ${new Date(actorDetails.birthday).toLocaleDateString()} </p>`, actorDetails.homepage && renderTemplate`<a${addAttribute(actorDetails.homepage, "href")} target="_blank" rel="noopener noreferrer" class="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
🌐 Official Website
</a>`, actorDetails.biography || "Biography not available.", topMovies.map((movie) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(movie.poster_path ? getImageUrl(movie.poster_path, "w185") : "/placeholder-movie.jpg", "src")}${addAttribute(movie.title, "alt")} class="w-full h-48 object-cover"> <div class="p-3"> <h3 class="font-semibold text-gray-900 text-sm mb-1">${movie.title}</h3> <p class="text-gray-600 text-xs mb-2">${movie.character}</p> <div class="flex items-center justify-between"> <span class="text-xs text-gray-500">${new Date(movie.release_date).getFullYear()}</span> <span class="text-xs bg-yellow-500 text-black px-1 rounded">⭐ ${movie.vote_average}</span> </div> </div> </div>`), actorDetails.popularity.toFixed(0), age, actorDetails.known_for_department, actorDetails.imdb_id && renderTemplate`<div class="flex justify-between"> <span class="text-gray-600">IMDB:</span> <a${addAttribute(`https://www.imdb.com/name/${actorDetails.imdb_id}`, "href")} target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 hover:text-blue-800">
View Profile
</a> </div>`) })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/actor/[id].astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/actor/[id].astro";
const $$url = "/actor/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
