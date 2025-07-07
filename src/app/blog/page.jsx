'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { sanityClient, urlFor } from '../../lib/sanity';
import styles from '../styles/Blog.module.css';

export default function BlogPage() {
  const { isDark } = useContext(ThemeContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        description,
        mainImage
      }`;
      const result = await sanityClient.fetch(query);
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post._id} className={styles.postItem}>
            <Link href={`/blog/${post.slug.current}`}>
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(800).url()}
                  alt={post.title}
                  className={styles.blogImage}
                />
              )}
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
