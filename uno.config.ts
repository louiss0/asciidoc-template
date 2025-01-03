import { defineConfig, presetWind, transformerVariantGroup } from "unocss";
import { presetAsciidocTypography } from "@forastro/asciidoc/unocss";


export default defineConfig({
    presets: [
        // Use WindiCSS classes.
        presetWind(),
        // presetTypography(),
        presetAsciidocTypography(),
      ],
      transformers: [
        // Enable variant groups.
        transformerVariantGroup(),
      ],
})