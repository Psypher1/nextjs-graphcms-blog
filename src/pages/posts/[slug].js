import { getPosts, getSinglePost } from "../../services";
import moment from "moment";

export async function getStaticPaths() {
  const posts = await getPosts();

  // const paths = posts.map((post) => {
  //   return {
  //     params: { slug: post.node.slug },
  //   };
  // });

  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));
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
    <div className="container mx-auto p-8 bg-white m-12 max-w-3xl rounded-md">
      <h2 className="text-4xl mb-4">{post.title}</h2>
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center space-x-2">
          <img
            height="30px"
            width="30px"
            className="rounded-full"
            alt={post.author.name}
            src={post.author.photo.url}
          />
          <p>{post.author.name}</p>
        </div>
        <span>| {moment(post.createdAt).format("MMM DD, YYYY")}</span>
      </div>
    </div>
  );
}
