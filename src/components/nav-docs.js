import React from 'react';
import { Link } from 'gatsby';

function NavDocs() {
  return (
    <nav className="p-5 pt-8">
      <div className="mt-3 mb-8">
        <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase font-bold text-sm lg:text-xs text-indigo-400">
          Getting Started
        </h5>

        <ul>
          <li className="mb-3 lg:mb-1">
            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/"
            >
              Overview
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/using-staticzap/"
            >
              Using Staticzap
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/using-images/"
            >
              Using Images
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/using-screenshot/"
            >
              Using Screenshot
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/using-avatar/"
            >
              Using Avatar
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/using-og-image/"
            >
              Using OG Image
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase font-bold text-sm lg:text-xs text-pink-400">
          Integrations
        </h5>

        <ul>
          <Link
            className="text-gray-600 hover:text-gray-900 block py-1"
            activeClassName="text-gray-900"
            to="/docs/wordpress-integration/"
          >
            WordPress
          </Link>
        </ul>
      </div>

      <div className="mb-8">
        <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase font-bold text-sm lg:text-xs text-purple-400">
          Utilities
        </h5>

        <ul>
          <li className="mb-3 lg:mb-1">
            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/whitelisting-statically/"
            >
              Whitelisting Statically
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/docs/our-network/"
            >
              Our Network
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase font-bold text-sm lg:text-xs text-green-400">
          Diagnostics
        </h5>

        <ul>
          <Link
            className="text-gray-600 hover:text-gray-900 block py-1"
            activeClassName="text-gray-900"
            to="/docs/checking-cache/"
          >
            Checking Cache
          </Link>

          <Link
            className="text-gray-600 hover:text-gray-900 block py-1"
            activeClassName="text-gray-900"
            to="/docs/purging-cache/"
          >
            Purging Cache
          </Link>
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase font-bold text-sm lg:text-xs text-yellow-500">
          Support
        </h5>

        <ul>
          <Link
            className="text-gray-600 hover:text-gray-900 block py-1"
            activeClassName="text-gray-900"
            to="/docs/faqs/"
          >
            FAQs
          </Link>

          <a
            className="text-gray-600 hover:text-gray-900 block py-1"
            href="https://statically.discourse.group/"
          >
            Community
          </a>

          <Link
            className="text-gray-600 hover:text-gray-900 block py-1"
            activeClassName="text-gray-900"
            to="/contact/"
          >
            Contact Us
          </Link>

          <a
            className="text-gray-600 hover:text-gray-900 block py-1"
            href="https://status.statically.io/"
          >
            Network Status
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavDocs;
