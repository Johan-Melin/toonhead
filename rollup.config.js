import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/toonhead.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/toonhead.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/toonhead.umd.js',
      name: 'toonhead',
      format: 'umd',
    },
    {
      file: 'dist/toonhead.umd.min.js',
      name: 'toonhead',
      format: 'umd',
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
};
