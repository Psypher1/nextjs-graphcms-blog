import Head from "next/head";
import Image from "next/image";
import Meta from "@components/Meta";
import { getPosts } from "../services";
import { PostCard, Categories, PostWidget } from "../components";

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Meta
        pageMeta={{
          title: "Protean Industries",
          description: "Welcome to the Protean Blog",
        }}
      />

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </section>
        <aside className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </aside>
      </main>
    </div>
  );
}
