function writeJson(path: string, data: Record<string, unknown>): string {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));

    return `Written to ${path}`;

  } catch (e) {
    return e.messase;
  }
}

console.log(writeJson('./src/sample/readAndWriteFiles/data.json', { hello: 'world' }));
/**
 * > deno run --allow-write ./src/sample/readAndWriteFiles/writeJson.ts
 * Written to ./data.json
 */
