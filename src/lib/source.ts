import { defineDocs } from 'fumadocs-mdx/macro';
import { loader } from 'fumadocs-core/source';
import { frontmatterSchema } from 'fumadocs-mdx/config';
import z from 'zod';

export const docs = defineDocs({
  dir: "src/docs",
  docs: {
    schema: frontmatterSchema.extend({
      author: z.string().optional(),
      sidebarTitle: z.string().optional(), // also being stripped right now
    }),
  },
});

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
});