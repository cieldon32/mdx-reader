import path from 'path';
import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from '@rollup/plugin-commonjs';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

const resolveFile = function(filePath) {
  return path.join(__dirname, '.', filePath)
}

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: resolveFile('src/index.ts'),
  output: [
    {
      format: 'esm',
      file: 'lib/mdictReader.esm.js',
      sourcemap: true,
    },
    {
      format: 'umd',
      file: 'lib/mdictReader.umd.js',
      sourcemap: true,
      name: 'mdictReader',
      exports: 'named',
    },
    {
      format: 'cjs',
      file: 'lib/mdictReader.cjs.js',
      sourcemap: true,
      name: 'mdictReader',
    }
  ],
  plugins: [
    builtins(),
    // 告诉 Rollup 如何查找模块
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' ),
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),

    // 将CommonJS 模块转换成es6模块
    commonjs(),
    json()
  ]
}
