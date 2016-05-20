import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'lib/index.js',
  dest: 'dist/lossless-json.js',
  format: 'umd',
  moduleName: 'LosslessJSON',
  sourceMap: true,
  plugins: [
    buble(),
    uglify()
  ]
};
