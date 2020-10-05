import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import staticallyMark from '../../static/images/branding/statically-mark.svg';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" keywords={[`statically`, `about`, `team`]} />

      <div>
        <section className="text-center mt-24 mb-20 mx-auto">
          <h2 className="inline-block">
            <img
              className="h-20"
              src={staticallyMark}
              alt="Statically"
              title="Statically Mark ⚡️"
            />
          </h2>
        </section>

        <div className="border-b"></div>

        <section className="my-24 max-w-4xl mx-auto px-4 md:px-0">
          <div className="text-center mb-20">
            <span className="font-bold text-purple-500 uppercase">
              Our Mission
            </span>
            <h1 className="font-bold text-5xl mx-auto mt-5 mb-5">
              Our mission is to make static files easy to manage and fast to
              deliver.
            </h1>
            <p className="mx-auto text-xl">
              We help files distribution <strong>faster</strong>,{' '}
              <strong>smaller</strong>, <strong>reliable</strong>, and{' '}
              <strong>more efficient</strong> than ever.
            </p>
          </div>
        </section>

        <div id="newsletter" className="border-b"></div>

        <section className="my-24 max-w-6xl mx-auto px-4 md:px-0">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl mx-auto mt-5 mb-5">Newsletter</h2>
            <p className="mx-auto text-xl">
              Don&apos;t miss up any news and updates from Statically.
            </p>
          </div>

          <form
            action="https://statically.us18.list-manage.com/subscribe/post?u=4dfd4ae04677bf4f6248182fc&amp;id=397ea962f2"
            className="bg-white border border-gray-400 rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto"
            name="Contact Form"
            method="POST"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
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
              Submit
            </button>
          </form>
        </section>

        <div className="border-b"></div>

        <section className="mt-24 max-w-4xl mx-auto px-4 md:px-0">
          <div className="flex content-center items-center flex-wrap">
            <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 mx-auto p-4 text-center sm:text-left">
              <h2 className="text-4xl max-w-xl font-bold">
                Want to contribute for this project?
              </h2>
            </div>

            <div className="sm:w-1/2 md:w-1/2lg:w-1/2 mb-4 mx-auto p-4 text-center">
              <Link to="/support-statically/" className="btn btn-primary">
                Become A Sponsor
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AboutPage;
