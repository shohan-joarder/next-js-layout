import React from "react";
import Head from "next/dist/shared/lib/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywards" content={keywords} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Coder 71 Ecommerce",
  keywords: "ecommerce,ecommerce",
  description: "Be connected with us",
};
