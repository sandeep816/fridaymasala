import type { MiddlewareResponseHandler } from 'astro';

export const onRequest: MiddlewareResponseHandler = async (context, next) => {
  try {
    console.log(`[${new Date().toISOString()}] ${context.request.method} ${context.request.url}`);
    
    const response = await next();
    
    console.log(`[${new Date().toISOString()}] Response status: ${response.status}`);
    
    return response;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Middleware error:`, error);
    
    // Return a simple error response
    return new Response(JSON.stringify({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 