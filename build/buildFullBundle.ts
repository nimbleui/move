import { rollup } from 'rollup';
import resolvePlugin from '@rollup/plugin-node-resolve';
import esbuild, { minify } from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import { resolve } from 'node:path';
import { projRoot, writeBundles } from './utils';

export async function buildFullBundle() {
  const bundle = await rollup({
    input: resolve(projRoot, './packages/move/index.ts'),
    plugins: [
      commonjs(),
      resolvePlugin(),
      esbuild({
        sourceMap: false,
        target: 'es2015',
        treeShaking: true,
        legalComments: 'eof',
      }),
      minify({ target: 'es2015', minify: true }),
    ],
    treeshake: true,
  });

  await writeBundles(bundle, [
    {
      format: 'umd',
      file: resolve(projRoot, `./dist/index.full.min.js`),
      exports: 'named',
      name: 'yMove',
      sourcemap: false,
    },
    {
      format: 'esm',
      file: resolve(projRoot, `./dist/index.full.min.mjs`),
      sourcemap: false,
    },
  ]);
}