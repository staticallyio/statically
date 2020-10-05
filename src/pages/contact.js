import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`statically`, `info`, `contact`]} />

      <div className="px-4 md:px-8">
        <section className="mt-24 mb-20 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="page-title">Contact Us.</h1>
            <h2 className="page-desc">
              Whether you&#39;ve got questions, are curious about specific
              feature, or even want to set up a custom needs – we&#39;re here to
              help.
            </h2>
          </div>

          <form
            className="bg-white border border-gray-400 rounded px-8 pt-6 pb-8 mt-20 mb-4 max-w-xl mx-auto"
            name="Contact Form"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="form-input w-full"
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

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
                type="text"
                placeholder="frans@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="form-input w-full"
                id="url"
                name="subject"
                type="text"
                placeholder="Subject goes here"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="form-input w-full"
                id="message"
                name="message"
                type="text"
                placeholder="Your message goes here"
                required
              ></textarea>
            </div>

            <button className="btn btn-secondary w-full" type="submit">
              Get in touch
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;
