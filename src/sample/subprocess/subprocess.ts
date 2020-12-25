const fileNames = Deno.args;
const sp = Deno.run({
  cmd: [
    'deno',
    'run',
    '--allow-read',
    'https://deno.land/std@0.81.0/examples/cat.ts',
    // ...fileNames
  ],
  stdout: 'piped',
  stdorr: 'piped'
});

const { code } = await sp.status();

if (code === 0) {
  const rawOutput = await sp.output();
  await Deno.stdout.write(rawOutput);

} else {
  const rawError = await sp.stderrOutput();
  const errorString = new TextDecoder().decode(rawError);
  console.log(errorString);
}

Deno.exit(code);
/**
 * > deno run --allow-run ./subprocess.ts <somefile>
 * [file content]
 * 
 * > deno run --allow-run ./subprocess.ts non_existent_file.md
 * Uncaught NotFound: No such file or directory (os error 2)
 *     at DenoError (deno/js/errors.ts:22:5)
 *     at maybeError (deno/js/errors.ts:41:12)
 *     at handleAsyncMsgFromRust (deno/js/dispatch.ts:27:17)
 */
