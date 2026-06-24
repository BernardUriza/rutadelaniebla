import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/data";
import NieblaNav from "@/components/NieblaNav";
import NieblaFooter from "@/components/NieblaFooter";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [post.cover],
    },
  };
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <NieblaNav />
      <header
        className="nb-hero nb-hero-sm has-photo"
        style={{ "--hero-img": `url('${post.cover}')` } as CSSProperties}
      >
        <div className="nb-hero-inner">
          <span className="nb-label" style={{ color: "rgba(244,241,234,0.7)" }}>{post.tag}</span>
          <h1>{post.title}</h1>
          <p>{post.author} · {post.date}</p>
        </div>
      </header>

      <article className="nb-section">
        <div className="nb-wrap" style={{ maxWidth: "720px" }}>
          {post.body.map((b, i) => {
            if (b.type === "p") {
              return (
                <Reveal key={i}>
                  <p style={{ fontSize: "1.12rem", lineHeight: 1.8, color: "var(--corteza)", margin: "1.4rem 0" }}>
                    {b.text}
                  </p>
                </Reveal>
              );
            }
            if (b.type === "quote") {
              return (
                <Reveal key={i}>
                  <blockquote style={{ borderLeft: "3px solid var(--musgo)", paddingLeft: "1.5rem", margin: "2.4rem 0", fontStyle: "italic" }}>
                    <p style={{ fontSize: "1.3rem", lineHeight: 1.6, color: "var(--bosque)" }}>{b.text}</p>
                    {b.cite && (
                      <cite style={{ display: "block", marginTop: "0.8rem", fontStyle: "normal", fontSize: "0.95rem", color: "var(--corteza)" }}>
                        — {b.cite}
                      </cite>
                    )}
                  </blockquote>
                </Reveal>
              );
            }
            if (b.type === "video") {
              const isLocal = b.url.startsWith("/") || b.url.endsWith(".mp4");
              return (
                <Reveal key={i}>
                  <figure style={{ margin: "2.8rem 0" }}>
                    {isLocal ? (
                      <video
                        src={b.url}
                        controls
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", display: "block", borderRadius: "10px", background: "#000" }}
                      />
                    ) : (
                      <YouTubeEmbed url={b.url} title={b.title} />
                    )}
                    {b.title && (
                      <figcaption style={{ marginTop: "0.7rem", fontSize: "0.85rem", color: "var(--corteza)" }}>
                        {b.title}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              );
            }
            if (b.type === "image") {
              return (
                <Reveal key={i}>
                  <figure style={{ margin: "2.8rem 0" }}>
                    <div
                      className="nb-figure"
                      style={{ backgroundImage: `url('${b.src}')`, aspectRatio: "16 / 10" }}
                      data-caption={b.caption}
                    />
                  </figure>
                </Reveal>
              );
            }
            return null;
          })}

          <div style={{ marginTop: "3.5rem" }}>
            <Link href="/blog" className="nb-doc-dl">
              <ArrowLeft size={16} /> Volver al blog
            </Link>
          </div>
        </div>
      </article>

      <NieblaFooter />
    </>
  );
}
