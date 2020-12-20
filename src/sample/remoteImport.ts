import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));
/**
 * Output
 * 
 * ❯ deno run src/sample/remoteImport.ts 
 * Download https://x.nest.land/ramda@0.27.0/source/index.js
 * ...
 * Check file:///Users/ko-kamenashi/Desktop/Samples/Deno/deno-sample/src/sample/remoteImport.ts
 * 60
 * 82.8
 */