import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DnNUPdoQ.mjs';
import 'kleur/colors';
import './chunks/astro/server_CoB5Orc0.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_DUOTLwNN.mjs';

const onRequest$1 = async (context, next) => {
  try {
    console.log(`[${(/* @__PURE__ */ new Date()).toISOString()}] ${context.request.method} ${context.request.url}`);
    const response = await next();
    console.log(`[${(/* @__PURE__ */ new Date()).toISOString()}] Response status: ${response.status}`);
    return response;
  } catch (error) {
    console.error(`[${(/* @__PURE__ */ new Date()).toISOString()}] Middleware error:`, error);
    return new Response(JSON.stringify({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
