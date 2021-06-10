import React from "react";
import Layout from "../components/Layout";

const homepage = () => {
  return (
    <Layout p={"prop"} age={333}>
      <p>Hey I'm the homepage!</p>
    </Layout>
  );
};

export default homepage;
