import Link from "next/link";

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    throw new Error('asdasdasdasd');
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 60 } })
        .then(res => res.json())
}

export default async function Comments({ params }) {
    const { id } = params
    const comments = await fetchComments(id);
    return (
        <ul style={{fontSize: 10, background: '#444' }}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h1>{comment.name}</h1>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>

    )

}