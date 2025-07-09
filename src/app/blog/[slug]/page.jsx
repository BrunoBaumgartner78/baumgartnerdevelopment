import { sanityClient } from '../../../lib/sanity';
import { PortableText } from '@portabletext/react';

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body
}`;

// ✅ Slug-Parameter vorbereiten
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({
    slug,
  }));
}

// ✅ Server-Komponente (keine Client-Komponente!)
export default async function PostPage({ params }) {
  const slug = decodeURIComponent(params.slug); // <- besonders wichtig bei Umlaute (ä, ü, ö)

  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return <main><p>Beitrag nicht gefunden</p></main>;
  }

  return (
    <main style={{ maxWidth: 700, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>{post.title}</h1>
      {post.publishedAt && (
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>
      )}
      <section style={{ marginTop: '2rem' }}>
        <PortableText value={post.body} />
      </section>
    </main>
  );
}
