import esbuild from "esbuild";
import browserSync from "@rbnlffl/esbuild-plugin-browser-sync";

const context = await esbuild.context({
    plugins: [
      browserSync({})
  ]
});

context.watch();
