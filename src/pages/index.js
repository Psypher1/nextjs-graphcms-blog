import Head from "next/head";
import Image from "next/image";
import Meta from "@components/Meta";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "In the night", excerpt: "i is exclide" },
  { title: "I hear them talk", excerpt: "i is exclide" },
  { title: "Coldest story", excerpt: "i is exclide" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Meta
        pageMeta={{
          title: "Protean Industries",
          description: "Welcome to the Protean Blog",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </main>
        <aside className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </aside>
      </div>
    </div>
  );
}
