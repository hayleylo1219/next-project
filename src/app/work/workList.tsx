import Link from 'next/link'
// import { usePathname } from 'next/navigation'

export interface PostProps {
  id: string
  title: string
  slug: string
}

export function WorkList({ posts, params }: { posts: PostProps[]; params: { slug: string } }) {
  //   const pathname = usePathname()
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} id={post.id} d-slug={post.slug} d-params={params.slug}>
          <Link className={`link ${params.slug === post.slug ? 'font-bold' : ''}`} href={`/work/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
