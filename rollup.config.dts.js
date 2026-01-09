// rollup.config.dts.js
import dts from 'rollup-plugin-dts';

export default {
  input: './dist/types/index.d.ts',  // Entry .d.ts file
  output: [
    {
      file: './dist/index.d.ts',     // Output combined file
      format: 'es',                  // ES module format (most common for libraries)
    },
  ],
  plugins: [dts()],                  // Use rollup-plugin-dts
};
