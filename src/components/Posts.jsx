const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

export default function Posts() {
  return (
    <>
      {
        posts.map((post) => (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ))
      }
    </>
  )
}