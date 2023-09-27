import typescript from '@rollup/plugin-typescript';
import FastGlob from 'fast-glob';

export default {
  input: FastGlob.globSync(['src/scenarios/*.ts']),
  output: {
    format: "es",
    dir: "dist",
    preserveModules: true,
  },
  external: ["k6"],
  plugins: [typescript()],
};
