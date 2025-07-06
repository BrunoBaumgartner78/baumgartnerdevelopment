import { sanityClient } from '../../../lib/sanity';
import { PortableText } from '@portabletext/react';

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body
}`;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return <p>Beitrag nicht gefunden</p>;
  }

  return (
    <article style={{ maxWidth: '700px', margin: '20rem auto', padding: '0 1rem' }}>
      <h1>{post.title}</h1>
      <time dateTime={post.publishedAt}>
        {new Date(post.publishedAt).toLocaleDateString()}
      </time>
      <section style={{ marginTop: '2rem' }}>
        <PortableText value={post.body} />
      </section>
    </article>
  );
}
