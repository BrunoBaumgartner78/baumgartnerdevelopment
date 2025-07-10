import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import { sanityClient, urlFor } from '@/lib/sanity';




const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage
}`;

export default async function BlogOverviewPage() {
  const posts = await sanityClient.fetch(query);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      {posts.length === 0 && <p>Noch keine Beiträge vorhanden.</p>}
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post._id} className={styles.postItem}>
            <Link href={`/blog/${post.slug.current}`} className={styles.postLink}>
              <h2>{post.title}</h2>
            </Link>
          {post.mainImage && (
  <img
    src={urlFor(post.mainImage).width(700).url()}
    alt={post.title}
    className={styles.blogImage}
  />

            )}
            {post.publishedAt && (
              <time className={styles.postDate} dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('de-CH')}
              </time>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
