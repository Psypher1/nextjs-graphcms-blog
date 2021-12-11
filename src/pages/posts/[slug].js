import { getPosts, getSinglePost } from "../../services";

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => {
    return {
      params: post.node.slug,
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getSinglePost(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export default function PostDetail({ post }) {
  return (
    <div className="p-8">
      <h2 className="text-5xl">Post Detail</h2>
    </div>
  );
}
