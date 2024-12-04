import { defineCollection, z } from 'astro:content';
import { asciidocLoader } from "@forastro/asciidoc"
const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: asciidocLoader('./src/content',),
	// Type-check frontmatter using a schema
	schema: z.object({
		doctitle: z.string(),
		description: z.string(),
		// Transform string to Date object
		pub_date: z.coerce.date(),
		updated_date: z.coerce.date().optional(),
		hero_image: z.string().optional(),
	}).transform(({ doctitle, ...rest }) => ({
		title: doctitle,
		...rest
	})),
});

export const collections = { blog };
