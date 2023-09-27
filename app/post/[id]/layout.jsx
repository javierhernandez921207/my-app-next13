import Link from "next/link";

const fetchPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } });
    return res.json();
}
export default async function Post({ params , children}) {
    const { id } = params
    const post = await fetchPost(id);
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/post/${id}/comments`}>Ver Comentarios</Link>
            {children}
        </article>
    )
}