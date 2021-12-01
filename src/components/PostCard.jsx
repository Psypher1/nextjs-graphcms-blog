export default function PostCard({ post }) {
  return (
    <article className="">
      <h2 className="text-3xl font-semibold">{post.title}</h2>
      <p className="text-lg">{post.excerpt}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        hic expedita minima excepturi tempore, neque fugiat deleniti quos ut
        voluptates!
      </p>
    </article>
  );
}
