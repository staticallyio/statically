import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Regular from '@fortawesome/free-regular-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';
import staticallyMark from '../../static/images/branding/statically-mark.svg';

import loadCarbonAds from '../hooks/carbonads';

const WordpressPage = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadCarbonAds(() => {
      setLoaded(true);
    });
  });

  return (
    <Layout>
      <SEO
        title="Free WordPress CDN"
        description="The best free and fast CDN for WordPress. Image, CSS, JS optimization."
        keywords={[`statically`, `wordpress`, `integration`, `free cdn`]}
      />

      <div className="px-4 py-8 md:p-8">
        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              WordPress + Statically
            </h1>
            <p className="text-lg mx-auto">
              Finally here! CDN that is optimized for the needs of WordPress
              based websites.
            </p>
          </div>

          <section className="mt-20 max-w-4xl mx-auto px-8 lg:px-0">
            <div className="flex flex-wrap mb-16 items-center">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-20 sm:mb-0">
                <h2 className="font-bold text-4xl md:max-w-sm mb-5">
                  WordPress, optimized!
                </h2>

                <p className="text-lg mb-5">
                  Minimize CSS and javascript, optimize and add transformation
                  capabilities to images, cache and deliver quickly.
                </p>

                <div id="ads"></div>
              </div>

              <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 m-auto">
                <div
                  className="w-32 rounded overflow-hidden border border-gray-400 mx-auto text-center px-6 py-4 mb-2"
                  title="Your WordPress site"
                >
                  <FontAwesomeIcon
                    icon={Brands.faWordpress}
                    className="integration-logo mx-auto"
                  />
                  <span className="text-sm mt-5">WordPress</span>
                </div>

                <div id="statically-to-you">
                  <svg
                    width="20"
                    height="30"
                    viewBox="0 0 20 30"
                    className="fetch"
                  >
                    <path d="M10 40 L10 -10"></path>
                  </svg>

                  <img
                    src={staticallyMark}
                    className="integration-logo mx-auto my-2"
                    alt="Statically"
                    title="Statically optimizing files"
                  />

                  <svg
                    width="20"
                    height="30"
                    viewBox="0 0 20 30"
                    className="fetch"
                  >
                    <path d="M10 40 L10 -10"></path>
                  </svg>

                  <div className="text-center mt-2">
                    <FontAwesomeIcon
                      icon={Regular.faUser}
                      className="integration-logo mx-auto mb-1"
                      title="Optimized version of static files delivered to you!"
                    />
                    <span>You</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex content-center flex-wrap">
              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto md:-ml-6">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Install plugin</div>
                  <p className="text-gray-700 text-base">
                    <a
                      className="font-bold text-green-700"
                      href="https://wordpress.org/plugins/statically/"
                    >
                      Download
                    </a>{' '}
                    the Statically plugin from WordPress Plugins directory.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Generate API Key</div>
                  <p className="text-gray-700 text-base">
                    <span className="font-bold">Tell Statically</span> to
                    service your domain.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto md:-mr-6">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">You are ready!</div>
                  <p className="text-gray-700 text-base">
                    <span className="font-bold">Save the settings</span> to make
                    your WordPress site optimized.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <svg
            width="20"
            height="30"
            viewBox="0 0 20 30"
            className="fetch green hidden md:block mx-auto"
          >
            <path d="M10 40 L10 -10"></path>
          </svg>

          <section className="mt-6 max-w-4xl mx-auto px-8 lg:px-0">
            <h2 className="font-bold text-center text-4xl max-w-xl mx-auto mt-5 mb-5">
              Generate API Key
            </h2>

            <form
              action="https://api.statically.io/integrations/wordpress"
              className="bg-white border border-gray-400 rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto"
              name="WordPress"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="WordPress" />

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="frans@example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-bold mb-1"
                  htmlFor="domain"
                >
                  Domain
                </label>
                <input
                  className="form-input w-full"
                  id="domain"
                  name="domain"
                  type="text"
                  placeholder="blog.example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-bold mb-1"
                  htmlFor="role"
                >
                  What is your role for this website?
                </label>
                <div className="relative">
                  <select className="form-input w-full" id="role" name="role">
                    <option>Owner</option>
                    <option>Admin</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-bold mb-1"
                  htmlFor="category"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    className="form-input w-full"
                    id="category"
                    name="category"
                  >
                    <option>Personal</option>
                    <option>Business</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio border-gray-400"
                    name="policies"
                    value="personal"
                    required
                  />
                  <span className="ml-2 text-sm">
                    Please read our
                    <Link to="/policies/privacy/">
                      <strong className="font-bold"> Privacy Policy</strong>
                    </Link>{' '}
                    and
                    <Link to="/policies/terms/">
                      <strong className="font-bold"> Terms of Service </strong>
                    </Link>
                    before using this service
                  </span>
                </label>
              </div>

              <button
                className="btn btn-primary w-full umami--click--btn-generate-api-key"
                type="submit"
              >
                Generate API Key
              </button>
            </form>
          </section>
        </section>
      </div>
    </Layout>
  );
}

export default WordpressPage;
