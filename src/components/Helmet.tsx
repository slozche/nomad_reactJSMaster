import React from "react";
import { Helmet } from "react-helmet";

const MetaHelmet = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default MetaHelmet;
