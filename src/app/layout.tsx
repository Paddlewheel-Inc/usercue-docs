import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "@/layouts/spacious";
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { Banner } from "@/components/banner";

const SansFont = Geist({ variable: "--font-geist", subsets: ["latin"] });
const MonoFont = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UserCue Docs",
  description: "UserCue documentation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${SansFont.variable} ${MonoFont.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
