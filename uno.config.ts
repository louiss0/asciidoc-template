import { defineConfig, presetWind, transformerVariantGroup } from "unocss";
import { presetAdocTypograhy } from "@forastro/asciidoc/plugins";


export default defineConfig({
    presets: [
        // Use WindiCSS classes.
        presetWind(),
        // presetTypography(),
        presetAdocTypograhy(),
      ],
      transformers: [
        // Enable variant groups.
        transformerVariantGroup(),
      ],
})