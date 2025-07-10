import { sanityClient, urlFor } from '@/lib/sanityClient'
import BlogList from './BlogList'
import styles from '../styles/Blog.module.css'

const query = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    publishedAt,
    mainImage,
    slug
  }
`

export default async function BlogPage() {
  const posts = await sanityClient.fetch(query)

  // mainImage als URL auflösen
  const postsWithImages = posts.map(post => ({
    ...post,
    mainImage: post.mainImage ? urlFor(post.mainImage).width(800).url() : null,
  }))

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <BlogList posts={postsWithImages} />
    </main>
  )
}
