const write = Deno.writeTextFile('./src/sample/readAndWriteFiles/hello.txt', 'Hello, world!');

write.then(() => console.log('File written to ./hello.txt'));
/**
 * > deno run --allow-write write.ts
 * File written to ./hello.txt
 */