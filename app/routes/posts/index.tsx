import { Link, useLoaderData } from 'remix'
import { getPosts } from '~/post'
import type { Post } from '~/post'

export const loader = () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
      <ul className="list-none">
        {posts.map((post) => (
          <li key={post.slug} className="mx-0">
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
