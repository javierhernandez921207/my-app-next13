import Link from 'next/link'
import style from './post.module.css'
import { LikeButton } from './LikeButton'

async function GetPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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
            <h1>Estos son los post</h1>
            {data.slice(0, 5).map(post => (
                <article key={post.id} className={style.post}>
                    <Link href={'post/[id]'} as={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        <hr></hr>
                    </Link>
                    <p>{post.body}</p>
                    <LikeButton id={post.id}></LikeButton>
                </article>
            ))}
        </section>
    )
}