import { useConfig } from "nextra-theme-docs";

export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  head: () => {
    const { title } = useConfig();
    return (
      <>
        <meta
          name="og:image"
          content={`https://nextra-ogp-sample.vercel.app/api/ogp?title=${title}`}
        />
      </>
    );
  },
};
