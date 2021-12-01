import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta({ pageMeta }) {
  const router = useRouter();
  const meta = {
    title: "Protean Industries",
    description: "Welcome to our blog",
    type: "website",
    ...pageMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        propery="og:url"
        content={`http://localhost:3000${router.asPath}`}
      />
      <meta propery="og:type" content={meta.type} />
      <meta propery="og:site_name" content="Protean Industries" />
      <meta propery="og:description" content={meta.description} />
      <meta propery="og:title" content={meta.title} />
    </Head>
  );
}
