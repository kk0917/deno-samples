const listener = Deno.listen({port: 8080});

console.log('Listening on 0.0.0.0:8080');

for await (const conn of listener) {
  Deno.copy(conn, conn);
}
/**
 * Run it:
 * 
 * ❯ deno run --allow-net src/sample/tcpEchoServer.ts
 * Check file:///Users/ko-kamenashi/Desktop/Samples/Deno/deno-sample/src/sample/tcpEchoServer.ts
 * Listening on 0.0.0.0:8080
 */
