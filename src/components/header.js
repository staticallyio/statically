import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import staticallyLogo from '../../static/images/branding/statically-logo-dark.svg';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap mt-2 p-5 lg:py-0 border-b md:border-transparent">
      <div className="flex items-center flex-shrink-0 text-white mr-10">
        <h2>
          <Link
            to="/"
            id="logo"
            className="flex items-center no-underline -mt-1"
          >
            <img
              className="h-6"
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
          isExpanded ? `block py-5` : `hidden`
        } w-full block lg:flex flex-grow lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow text-gray-700">
          <Link
            to="/features/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 hover:text-red-500 border-b-2 border-transparent"
            activeClassName="text-red-500"
          >
            Features
          </Link>
          <Link
            to="/docs/using-images/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 hover:text-red-600 border-b-2 border-transparent"
            activeClassName="text-red-600"
          >
            Images
          </Link>
          <Link
            to="/convert/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 hover:text-red-600 border-b-2 border-transparent"
            activeClassName="text-red-600"
          >
            Convert
          </Link>
          <Link
            to="/docs/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 hover:text-red-600 border-b-2 border-transparent"
            activeClassName="text-red-600"
          >
            Docs
          </Link>
          <Link
            to="/support-statically/"
            className="block py-2 lg:py-6 lg:inline-block lg:mt-0 mr-4 hover:text-red-600 border-b-2 border-transparent"
            activeClassName="text-red-600"
          >
            Sponsors
          </Link>
        </div>

        <div className="flex mt-5 lg:mt-0">
          <Link
            to="/login/"
            className="block lg:inline-block mt-1 mr-6 hover:text-red-600 border-b-2 border-transparent"
            activeClassName="text-red-600"
          >
            Login
          </Link>
          <a
            href="https://www.patreon.com/fransallen"
            className="btn btn-primary btn-sm umami--click--btn-donate-1-dollar-patreon"
            rel="noopener noreferrer"
            target="_blank"
          >
            Donate $1
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
