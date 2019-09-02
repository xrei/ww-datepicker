import path from 'path'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import commonjs from 'rollup-plugin-commonjs'

export default [{
  // input: path.join(__dirname, '..', 'src', 'components', 'Datepicker.vue'),
  input: path.join(__dirname, '..', 'src', 'index.js'),
  output: [
    {
      file: 'dist/vuejs-datepicker.js',
      format: 'umd',
      exports: 'named',
      name: 'vuejsDatepicker'
    },
    {
      file: 'dist/vuejs-datepicker.common.js',
      exports: 'named',
      format: 'cjs'
    },
    {
      file: 'dist/vuejs-datepicker.esm.js',
      exports: 'named',
      format: 'es'
    }
  ],
  external: ['date-fns'],
  plugins: [
    vue({css: true}),
    postcss({plugins: [autoprefixer()]}),
    commonjs(),
    babel({exclude: 'node_modules/**'})
  ]
}, {
  // input: path.join(__dirname, '..', 'src', 'components', 'Datepicker.vue'),
  input: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    file: 'dist/vuejs-datepicker.min.js',
    format: 'umd',
    name: 'vuejsDatepicker',
    globals: {
      'date-fns': 'dateFns'
    },
  },
  plugins: [
    vue({css: true}),
    postcss({plugins: [autoprefixer()]}),
    commonjs(),
    terser(),
    babel({exclude: 'node_modules/**'})
  ]
}]
