import { sanityClient, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  body
}`;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}

// Server-Komponente: context muss awaited werden (Next.js 13+)
export default async function PostPage(context) {
  const { params } = await context;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return notFound();
  }

  return (
    <article style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>{post.title}</h1>
      {post.publishedAt && (
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString('de-CH')}
        </time>
      )}

      {post.mainImage && (
  <img
    src={urlFor(post.mainImage).width(800).url()}
    alt={post.title}
    style={{ width: '100%', borderRadius: '12px', margin: '1rem 0' }}
  />
)}


      <section style={{ marginTop: '2rem' }}>
        <PortableText value={post.body} />
      </section>
    </article>
  );
}
