const text = Deno.readTextFile('/Users/ko-kamenashi/Desktop/Samples/Deno/deno-sample/src/sample/readAndWriteFiles/people.json');

text.then(response => console.log(response));
/**
 * Output:
 *
 * [
 *   {"id": 1, "name": "John", "age": 23},
 *   {"id": 2, "name": "Sandra", "age": 51},
 *   {"id": 5, "name": "Devika", "age": 11}
 * ]
 */
