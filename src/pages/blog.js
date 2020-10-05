import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostLink from '../components/post-link';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <SEO title="Blog" keywords={[`statically`, `blogs`, `news`]} />
      <section className="max-w-2xl mx-auto mt-20 px-5">
        <div className="text-center">
          <h1 className="page-title">We are preparing.</h1>
          <h2 className="page-desc max-w-3xl">
            Join our mailing list so that you will be the first to know about our blog posts.
          </h2>
        </div>

        <form
          action="https://statically.us18.list-manage.com/subscribe/post?u=4dfd4ae04677bf4f6248182fc&amp;id=397ea962f2"
          className="bg-white border border-gray-400 rounded px-8 pt-6 pb-8 mt-24 mb-16 max-w-xl mx-auto"
          name="Newsletter"
          method="POST"
        >
          <input type="hidden" name="form-name" value="Newsletter" />
          <div className="mb-4">
            <input
              className="form-input w-full"
              id="email"
              name="EMAIL"
              type="text"
              placeholder="frans@example.com"
              required
            />
          </div>

          <button className="btn w-full" type="submit">
            Subscribe
          </button>
        </form>
        
        {Posts}
      </section>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { path: { regex: "/blog/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
          }
        }
      }
    }
  }
`;
