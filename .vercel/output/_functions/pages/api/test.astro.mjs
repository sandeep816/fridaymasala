import { f as createComponent, r as renderTemplate } from '../../chunks/astro/server_CGrKawKz.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

async function GET() {
  return new Response(JSON.stringify({
    message: "API is working!",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    environment: process.env?.VERCEL ? "Vercel" : "Local"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "E:/MyWork/FM/fridaymasala/src/pages/api/test.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/api/test.astro";
const $$url = "/api/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
