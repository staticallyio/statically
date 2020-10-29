import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DocsNav from '../components/docs-nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Regular from "@fortawesome/free-regular-svg-icons";

import loadCarbonAds from '../hooks/carbonads';

function DocsPage() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    loadCarbonAds(() => {
      setLoaded(true);
    });
  });

  return (
    <Layout>
      <SEO title="Docs" keywords={[`statically`, `docs`, `updates`]} />
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
            <DocsNav />
          </div>
        </div>

        <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
          <div className="p-5 max-w-3xl">
            <h1 className="text-4xl font-bold">Statically Documentation</h1>
            <div className="markdown">
              <p>
                This page is an overview of the Statically documentation and
                related resources.
              </p>

              <h2>Usage</h2>
              <p>All Statically's services starts with this URL: </p>
              <p>
                <code>https://cdn.statically.io</code>
              </p>
              <p>
                If you are still using the old URL{' '}
                <code>https://cdn.staticaly.com</code>, please use the above
                instead.
              </p>

              <h2>Allowed HTTP methods</h2>
              <p>
                Our CDN only accepts <strong>GET</strong> and{' '}
                <strong>HEAD</strong> requests, otherwise it will be rejected.
              </p>

              <h2>Getting Started</h2>
              <p>
                Statically has a wide variety of tools to help you optimize web
                projects, let's get started!
              </p>

              <p className="mt-8">
                <Link
                  className="btn btn-primary btn-sm"
                  to="/docs/using-staticzap/"
                >
                  Using Staticzap
                </Link>
              </p>
            </div>
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

export default DocsPage;
