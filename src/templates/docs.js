import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NavDocs from '../components/nav-docs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Regular from "@fortawesome/free-regular-svg-icons";

import loadCarbonAds from '../hooks/carbonads';

function DocsPost({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const [ isExpanded, toggleExpansion ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    loadCarbonAds(() => {
      setLoaded(true);
    });
  });

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section className="lg:flex">
        <div className="block lg:hidden p-3 bg-gray-300">
          <button
            className="flex items-center px-3 py-2 border rounded text-black border-0"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3 mr-2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            Docs
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } bg-white border-b lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5`}
        >
          <div className="scrolling-touch">
            <NavDocs />
          </div>
        </div>

        <div className="lg:w-3/4 xl:w-4/5">
          <div className="p-5 pt-8 max-w-3xl">
            <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>

        <aside className="lg:w-1/4 xl:2/5 mt-10 p-5">
          <div className="mb-5">
            <a
              className="text-lg umami--click--link-docs-chat"
              href="https://twitter.com/staticallyio"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="mr-2" icon={Regular.faCommentDots} />
              Chat with Us!
            </a>
            
            <a
              className="text-lg block mt-2 umami--click--link-docs-feedback"
              href="https://github.com/staticallyio/statically/issues/new"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="mr-2" icon={Regular.faEdit} />
              Feedback
            </a>
          </div>

          <div id="ads"></div>
        </aside>
      </section>
    </Layout>
  );
}

export default DocsPost;

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
