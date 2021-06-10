import React from "react";
import Layout from "./src/components/Layout";
// import "./src/styles/red.css"; //!Test for css this way

// Allows default wrapping in Layout
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
