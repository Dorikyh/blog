import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className='mb-8'>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          Dorikyh Portfolio
        </h1>
        <p>
          {`I'm a Software Developer building robust and scalable services with the most efficient solutions. With two years of Python experience, I specialize in REST APIs, SQL Databases & asynchronous systems, also I have knowledge in JavaScript, Git & Github.`}
        </p>
      </div>
      <div className="mb-4">
        <h2 className='text-2xl font-semibold mb-2'>Blog</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
