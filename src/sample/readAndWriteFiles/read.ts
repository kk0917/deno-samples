const text = Deno.readTextFile('./src/sample/readAndWriteFiles/people.json');

text.then(response => console.log(response));
/**
 * ❯ deno run --allow-read src/sample/readAndWriteFiles/read.ts 
 * Check file:///path/to/read.ts
 * [
 *   {"id": 1, "name": "John", "age": 23},
 *   {"id": 2, "name": "Sandra", "age": 51},
 *   {"id": 5, "name": "Devika", "age": 11}
 * ]
 */
