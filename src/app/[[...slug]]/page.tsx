import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { InlineTOC } from "@/components/inline-toc";
import { getMDXComponents } from "@/components/mdx";
import type { Author } from "@/data/authors";
import { authors } from "@/data/authors";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "@/layouts/spacious/page";
import { source } from "@/lib/source";

async function PageContent({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const authorKey = (page.data as { author?: string }).author;
  const author = authorKey
    ? (authors[authorKey] as Author | undefined)
    : undefined;

  return (
    <>
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        {author && (
          <div className="not-prose flex items-center gap-3">
            <Image
              src={author.avatar}
              alt={author.name}
              width={36}
              height={36}
              className="rounded-full ring-1 ring-fd-border"
              unoptimized
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-fd-muted-foreground">
                Authored by
              </span>
              <a
                href={author.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-fd-foreground underline-offset-4 hover:underline"
              >
                {author.name}
              </a>
            </div>
          </div>
        )}
        <InlineTOC items={page.data.toc}>Table of Contents</InlineTOC>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export default function Page(props: PageProps<"/[[...slug]]">) {
  return (
    <Suspense fallback={null}>
      <PageContent params={props.params} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
