import path from 'node:path';
import { writeFile } from 'node:fs';
import { projRoot } from './utils';

const pkg = {
  name: '@nimble-ui/move',
  version: '1.0.4',
  description: '鼠标移动事件封装',
  author: {
    name: 'Chen Yu Yun',
    email: '897908015@qq.com',
  },
  keywords: [
    'low code',
    'vue',
    'vue3',
    'move',
    'react',
    'component library',
    '@nimble-ui/move',
    'nimble-ui',
    "move",
  ],
  license: 'MIT',
  main: './lib/index.cjs.js',
  module: './es/index.esm.js',
  browser: './index.full.min.js',
  types: './types/index.d.ts',
  homepage: 'https://github.com/nimbleui/move',
  bugs: {
    url: 'https://github.com/nimbleui/move/issues',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/nimbleui/move',
  },
  publishConfig: {
    access: 'public',
  },
  exports: {
    '.': {
      import: './es/index.esm.js',
      require: './lib/index.cjs.js',
      browser: './index.full.min.js',
      types: './types/index.d.ts',
    },
  },
};

export function createPackage() {
  return new Promise((resolve, reject) => {
    writeFile(
      path.resolve(projRoot, 'dist/package.json'),
      JSON.stringify(pkg, null, 2),
      (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      }
    );
  });
}
