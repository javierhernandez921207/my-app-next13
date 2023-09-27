import Link from 'next/link'
import style from './post.module.css'
import { LikeButton } from './LikeButton'

async function GetPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Post() {
    const data = await GetPosts()
    return (
        <section>
            <div className='row'>
                {data.slice(0, 5).map(post => (
                    <div className={style.post}>
                        <article key={post.id} >
                            <Link href={'post/[id]'} as={`/post/${post.id}`}>
                                <strong><h2>{post.title}</h2></strong>
                            </Link>
                            <p>{post.body}</p>
                            <LikeButton id={post.id}></LikeButton>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}