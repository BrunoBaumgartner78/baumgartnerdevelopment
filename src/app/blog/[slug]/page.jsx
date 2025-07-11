import { notFound } from 'next/navigation'
import { sanityClient, urlFor } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import styles from '@/app/styles/Blog.module.css'

export async function generateStaticParams() {
  const posts = await sanityClient.fetch(`*[_type == "post"]{ slug }`)
  return posts.map(post => ({
    slug: post.slug.current,
  }))
}

const query = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    author->{
      name,
      image
    }
  }
`

const components = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || 'Blogbild'}
        className={styles.postImage}
      />
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.postLink}
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className={styles.postHeading}>{children}</h2>
    ),
    normal: ({ children }) => (
      <p className={styles.postParagraph}>{children}</p>
    ),
  },
}

export default async function PostPage({ params }) {
  const slug = params.slug
  const post = await sanityClient.fetch(query, { slug })

  if (!post) return notFound()

  return (
    <main className={styles.postContainer}>
      <article>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postDate}>
          {new Date(post.publishedAt).toLocaleDateString('de-CH', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            className={styles.postMainImage}
          />
        )}

        <section className={styles.postContent}>
          <PortableText value={post.body} components={components} />
        </section>

        {post.author && (
          <footer className={styles.postAuthor}>
            {post.author.image && (
              <img
                src={urlFor(post.author.image).width(80).height(80).url()}
                alt={post.author.name}
                className={styles.authorImage}
              />
            )}
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>{post.author.name}</p>
              <p className={styles.authorLabel}>Autor</p>
            </div>
          </footer>
        )}
      </article>
    </main>
  )
}
