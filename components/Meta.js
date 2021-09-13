import Head from "next/head";
const Meta = ({ title, keyword, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Chatt App Nextjs",
  keyword: "Web development programming",
  description: "The best app to chat",
};

export default Meta;
