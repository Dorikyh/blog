import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className=''>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full bg-black-900 mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums sm:mt-0 md:mt-2">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>

              <p className="text-neutral-800 dark:text-neutral-300 tabular-nums mt-1">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
