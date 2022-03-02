import Head from "next/head";

export default function OpenGraphHeadPage() {
  return (
    <div>
      <Head>
        <meta property="og: title" content="My Site" />
        <meta property="og: description" content="Welcome to JB's Site" />
      </Head>
      <div>Open Graph Practice Page</div>
    </div>
  );
}
//우리 페이지
