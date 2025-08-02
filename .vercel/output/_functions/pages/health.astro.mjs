import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BGv2XKps.mjs';
export { renderers } from '../renderers.mjs';

const $$Health = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Health Check - Friday Masala" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 mb-6">Health Check</h1> <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"> <strong>✅ Status:</strong> Application is running successfully
</div> <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4"> <strong>🌐 Environment:</strong> ${typeof process !== "undefined" && process.env?.VERCEL ? "Vercel" : "Local Development"} </div> <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4"> <strong>📅 Timestamp:</strong> ${(/* @__PURE__ */ new Date()).toISOString()} </div> <div class="mt-6"> <a href="/" class="text-red-500 hover:text-red-600 font-semibold">
← Back to Home
</a> </div> </div> </div> ` })}`;
}, "E:/MyWork/FM/fridaymasala/src/pages/health.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/health.astro";
const $$url = "/health";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Health,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
