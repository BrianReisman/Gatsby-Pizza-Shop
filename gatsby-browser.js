import React from "react";
import Layout from "./src/components/Layout";

// Allows default wrapping in Layout
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
