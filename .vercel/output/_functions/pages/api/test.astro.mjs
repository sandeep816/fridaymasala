import { f as createComponent, r as renderTemplate } from '../../chunks/astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

async function GET() {
  try {
    console.log("API test endpoint called");
    const response = {
      message: "API is working!",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      environment: process.env?.VERCEL ? "Vercel" : "Local",
      nodeEnv: process.env?.NODE_ENV,
      vercelEnv: process.env?.VERCEL_ENV
    };
    console.log("Response data:", response);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("API test endpoint error:", error);
    return new Response(JSON.stringify({
      error: "API test failed",
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
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
