const p = Deno.run({
  cmd: ['echo', 'hello']
});

await p.status();
/**
 * Run it:
 * 
 * > deno run --allow-run src/sample/subprocess/subprocess_simple.ts
 * hello
 */
