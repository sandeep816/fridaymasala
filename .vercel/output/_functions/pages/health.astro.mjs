import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_OARH5pAK.mjs';
export { renderers } from '../renderers.mjs';

const $$Health = createComponent(($$result, $$props, $$slots) => {
  const envInfo = {
    isVercel: typeof process !== "undefined" && process.env?.VERCEL,
    nodeEnv: typeof process !== "undefined" ? process.env?.NODE_ENV : "unknown",
    vercelEnv: typeof process !== "undefined" ? process.env?.VERCEL_ENV : "unknown",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  console.log("Health check page loaded with env info:", envInfo);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Health Check - Friday Masala" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 mb-6">Health Check</h1> <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"> <strong>✅ Status:</strong> Application is running successfully
</div> <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4"> <strong>🌐 Environment:</strong> ${envInfo.isVercel ? "Vercel" : "Local Development"} </div> <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4"> <strong>📅 Timestamp:</strong> ${envInfo.timestamp} </div> <div class="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded mb-4"> <strong>🔧 Node Environment:</strong> ${envInfo.nodeEnv} </div> <div class="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded mb-4"> <strong>🚀 Vercel Environment:</strong> ${envInfo.vercelEnv} </div> <div class="mt-6 space-y-2"> <a href="/" class="text-red-500 hover:text-red-600 font-semibold block">
← Back to Home
</a> <a href="/api/test" class="text-blue-500 hover:text-blue-600 font-semibold block">
→ Test API Endpoint
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
