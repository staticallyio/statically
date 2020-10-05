import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DocsNav from '../components/docs-nav';

function FeaturesPage() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <Layout>
      <SEO
        title="Features"
        keywords={[`statically`, `features`, `services`, `cdn`, `open source`]}
      />
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
            <h1 className="text-4xl font-bold">Features</h1>
            <div className="markdown">
              <p>
                Statically offers optimization and CDN for open source static
                assets.
              </p>

              <h2>Multi-CDN</h2>
              <p>
                Statically uses multi-CDN to provide better service performance
                for end users, it will pick the fastest server from 3 CDN
                providers for your location. Our multi-CDN solution is powered
                by NS1.
              </p>

              <h2>File Optimization</h2>
              <p>
                File optimization is available on the Staticzap service, you can
                optimize CSS, JavaScript, SVG, HTML, and XML files directly from
                the repository.
              </p>

              <h2>CDN for Open SOurce</h2>
              <p>We provide CDN for everything on the platforms below:</p>

              <ul>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Bitbucket</li>
                <li>WordPress SVN</li>
              </ul>

              <p className="mt-8">
                <Link className="btn btn-primary btn-sm" to="/docs/">
                  Get Started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default FeaturesPage;
