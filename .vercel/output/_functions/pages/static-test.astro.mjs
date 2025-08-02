import { f as createComponent, n as renderHead, o as renderScript, r as renderTemplate } from '../chunks/astro/server_CoB5Orc0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$StaticTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-nkospccm> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Static Test - Friday Masala</title>${renderHead()}</head> <body data-astro-cid-nkospccm> <div class="container" data-astro-cid-nkospccm> <h1 data-astro-cid-nkospccm>🚀 Static Test Page</h1> <div class="success" data-astro-cid-nkospccm> <strong data-astro-cid-nkospccm>✅ Success!</strong> This static page is working correctly.
</div> <div class="info" data-astro-cid-nkospccm> <strong data-astro-cid-nkospccm>📋 Information:</strong> <ul data-astro-cid-nkospccm> <li data-astro-cid-nkospccm>This page is completely static</li> <li data-astro-cid-nkospccm>No server-side processing required</li> <li data-astro-cid-nkospccm>Should work even if serverless functions are failing</li> <li data-astro-cid-nkospccm>Timestamp: <span id="timestamp" data-astro-cid-nkospccm></span></li> </ul> </div> <div class="info" data-astro-cid-nkospccm> <strong data-astro-cid-nkospccm>🔗 Test Links:</strong> <ul data-astro-cid-nkospccm> <li data-astro-cid-nkospccm><a href="/" class="link" data-astro-cid-nkospccm>Home Page</a></li> <li data-astro-cid-nkospccm><a href="/health" class="link" data-astro-cid-nkospccm>Health Check</a></li> <li data-astro-cid-nkospccm><a href="/api/test" class="link" data-astro-cid-nkospccm>API Test</a></li> </ul> </div> <div class="info" data-astro-cid-nkospccm> <strong data-astro-cid-nkospccm>📝 Next Steps:</strong> <ul data-astro-cid-nkospccm> <li data-astro-cid-nkospccm>If this page loads, the deployment is working</li> <li data-astro-cid-nkospccm>If other pages fail, it's a serverless function issue</li> <li data-astro-cid-nkospccm>Check Vercel logs for specific error messages</li> </ul> </div> </div> ${renderScript($$result, "E:/MyWork/FM/fridaymasala/src/pages/static-test.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "E:/MyWork/FM/fridaymasala/src/pages/static-test.astro", void 0);

const $$file = "E:/MyWork/FM/fridaymasala/src/pages/static-test.astro";
const $$url = "/static-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$StaticTest,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
