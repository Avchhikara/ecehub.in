import * as React from "react";

import Head from "next/head";

import "../../static/style.scss";

export default ({ children, title, description }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="descriptions" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/img/favicon.png"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    {children}
  </React.Fragment>
);
