const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
/**
 * > deno run --allow-net=example.com https://deno.land/std@0.81.0/examples/curl.ts https://example.com
 * Download https://deno.land/std@0.81.0/examples/curl.ts
 * Check https://deno.land/std@0.81.0/examples/curl.ts
 * <!doctype html>
 * <html>
 *   <head>
 *       <title>Example Domain</title>
 *       <meta charset="utf-8" />
 *       ...
 *       <style type="text/css">
 *         body {
 *             background-color: #f0f0f2;
 *             margin: 0;
 *             padding: 0;
 *             font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
 *             
 *         }
 *         ...
 *       </style>
 *   </head>
 *   <body>
 *     <div>
 *       ...
 *     </div>
 *   </body>
 * </html>
 */
