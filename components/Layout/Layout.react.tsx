import * as React from "react";

import Head from "next/head";

import NavBar from "./../NavBar";

import "../../static/style.scss";

import "bootstrap/dist/css/bootstrap.min.css";

export default ({ children, title, description }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="descriptions" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="./../../static/img/favicon.png"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:900i"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
    </Head>
    <NavBar />
    {children}
  </React.Fragment>
);
