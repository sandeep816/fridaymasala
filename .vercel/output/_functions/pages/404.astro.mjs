import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRh8Damz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found - Friday Masala", "description": "The page you're looking for doesn't exist." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-100"> <div class="text-center"> <div class="text-6xl font-bold text-gray-900 mb-4">404</div> <h1 class="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1> <p class="text-gray-600 mb-8">
Sorry, the page you're looking for doesn't exist or has been moved.
</p> <div class="space-y-4"> <a href="/" class="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
🏠 Go Home
</a> <br> <a href="/movies/popular" class="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
🎬 Browse Movies
</a> </div> </div> </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/404.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
