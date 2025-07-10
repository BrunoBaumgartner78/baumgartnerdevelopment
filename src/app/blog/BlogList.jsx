import Link from 'next/link'
import styles from '../styles/Blog.module.css'

export default function BlogList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts.map(post => (
        <li key={post.slug.current} className={styles.postItem}>
          <Link href={`/blog/${post.slug.current}`} className={styles.postLink}>
            {post.title}
          </Link>
          {post.mainImage && (
            <img
              src={post.mainImage}
              alt={post.title}
              className={styles.blogImage}
            />
          )}
          <p className={styles.postDate}>
            {new Date(post.publishedAt).toLocaleDateString('de-CH', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </li>
      ))}
    </ul>
  )
}
