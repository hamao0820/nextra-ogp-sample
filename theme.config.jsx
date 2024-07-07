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
  useNextSeoProps: () => ({
    defaultTitle: "nextra-ogp-sample",
    titleTemplate: "nextra-ogp-sample",
    description: "nextra-ogp-sample",
    twitter: {
      handle: "@hamao_0820",
      site: "@hamao_0820",
      cardType: "summary_large_image",
    },
    openGraph: {
      url: "https://nextra-ogp-sample.vercel.app",
      description: "nextra-ogp-sample",
    },
  }),
};
