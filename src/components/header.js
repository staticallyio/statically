import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import staticallyLogo from '../../static/images/branding/statically-logo-dark.svg';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="border-b flex items-center justify-between flex-wrap px-5 py-5 lg:py-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2>
          <Link
            to="/"
            id="logo"
            className="flex items-center no-underline mr-6"
          >
            <span className="font-bold text-xl tracking-tight hidden">
              {siteTitle}
            </span>
            <img
              className="h-8"
              src={staticallyLogo}
              alt="Statically"
              title="Statically logo"
            />
          </Link>
        </h2>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-red-500 hover:border-red-500"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg lg:flex-grow pt-3 lg:pt-0">
          <Link
            to="/features/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 text-gray-700 hover:text-red-600 border-b-2 border-transparent font-semibold"
            activeClassName="text-red-600 lg:border-red-600"
          >
            Features
          </Link>
          <Link
            to="/docs/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 text-gray-700 hover:text-red-600 border-b-2 border-transparent font-semibold"
            activeClassName="text-red-600 lg:border-red-600"
          >
            Docs
          </Link>
          <Link
            to="/blog/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 text-gray-700 hover:text-red-600 border-b-2 border-transparent font-semibold"
            activeClassName="text-red-600 lg:border-red-600"
          >
            Blog
          </Link>
          <Link
            to="/support-statically/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 text-gray-700 hover:text-red-600 border-b-2 border-transparent font-semibold"
            activeClassName="text-red-600 lg:border-red-600"
          >
            Sponsors
          </Link>
          <a
            href="https://statically.discourse.group"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 text-gray-700 hover:text-red-600 border-b-2 border-transparent font-semibold"
          >
            Community
          </a>
        </div>

        <div className="flex mt-3 lg:mt-0">
          <a
            href="https://www.patreon.com/fransallen"
            className="btn btn-primary btn-sm umami--click--btn-become-a-sponsor"
            title="Become A Backer"
            rel="noopener noreferrer"
            target="_blank"
          >
            Become A Sponsor
          </a>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
