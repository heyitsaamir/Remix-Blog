import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { MarkdownContainer } from '~/components/PostMarkdown'
import { getPost, Post } from '~/post'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData<Post>()
  return (
    <MarkdownContainer>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </MarkdownContainer>
  )
}
