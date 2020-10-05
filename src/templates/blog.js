import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function blogPost({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section className="max-w-2xl mx-auto pt-10 pb-20 px-5">
        <div className="markdown mt-10">
          <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
          <h2 className="text-sm text-gray-900 mt-2">
            {frontmatter.author} on {frontmatter.date}
          </h2>
          <div
            className="my-4 text-gray-900"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;
