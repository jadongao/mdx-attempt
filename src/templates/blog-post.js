import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import "katex/dist/katex.min.css";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <>
      <h1>{data.mdx.frontmatter.slug}</h1>
      <h2>wassup</h2>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
