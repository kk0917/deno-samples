const write = Deno.writeTextFile('./hello.txt', 'Hello, world!');

write.then(() => console.log('File written to ./hello.txt'));
/**
 * Output: File written to ./hello.txt
 */