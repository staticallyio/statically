import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";

import Layout from '../components/layout';
import SEO from '../components/seo';

function PressPage() {
  return (
    <Layout>
      <SEO
        title="Press"
        description="Statically is proving its existence by showing on the news."
        keywords={[`press`, `web`, `optimization`]}
      />

      <div className="px-4">
        <section className="text-left mx-auto py-12">
          <span className="uppercase text-indigo-500 font-bold">What the news say</span>
          <h1 className="text-4xl font-heading font-bold mt-1">
            Press
          </h1>
          <h2 className="text-xl max-w-4xl mt-5 text-gray-800">
            Listing all the news that saying the word "Statically".
          </h2>
          <Link
            className="block text-lg mt-3 text-indigo-500 inline-block"
            to="/contact/"
          >
            Have write an article about us? Send here
            <FontAwesomeIcon className="ml-2" icon={Solid.faLongArrowAltRight} />
          </Link>
        </section>

        <section className="text-left mx-auto py-12 text-lg">
          <span className="bg-gradient-to-r from-pink-400 to-indigo-500 text-white shadow rounded-full px-4 py-3 inline"><FontAwesomeIcon icon={Solid.faBookmark} /></span>
          <ul className="mt-10 space-y-2">
            <li>
              <a
                className="border-b hover:border-indigo-300"
                href="https://blog.mergify.io/how-to-serve-static-files-from-github/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <strong>How to serve static files from GitHub</strong> &mdash; Mergify
              </a>
            </li>

            <li>
              <a
                className="border-b hover:border-indigo-300"
                href="https://isotropic.co/speeding-up-a-wordpress-site-with-statically-a-free-cdn/"
                rel="noopener noreferrer"
                target="_blank"
              >
                 <strong>Speeding up a WordPress site</strong> &mdash; Isotropic Design
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default PressPage;
