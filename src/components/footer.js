import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as Brands from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="mt-20 mb-24 text-lg text-center font-semibold">
      <nav className="flex flex-wrap content-center max-w-xl mx-auto mb-5">
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 pb-6 sm:pr-12">
          <ul>
            <li>
              <Link to="/convert/">Convert</Link>
            </li>
            
            <li>
              <Link to="/wordpress/">WordPress</Link>
            </li>

            <li>
              <Link to="/docs/">Docs</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 pb-6 sm:px-12">
          <ul>
            <li>
              <Link to="/about/">About</Link>
            </li>

            <li>
              <Link to="/blog/">Blog</Link>
            </li>

            <li>
              <Link to="/about/#newsletter">Newsletter</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 pb-6 sm:pl-12">
          <ul>
            <li>
              <a href="https://statically.discourse.group">Community</a>
            </li>

            <li>
              <Link to="/docs/our-network/">Our Network</Link>
            </li>

            <li>
              <a href="https://status.statically.io">Status</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="max-w-xl mx-auto text-center text-3xl mb-10">
        <a
          className="px-4"
          href="https://twitter.com/staticallyio"
          title="Twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={Brands.faTwitter} />
        </a>

        <a
          className="px-4"
          href="https://github.com/staticallyio"
          title="GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={Brands.faGithub} />
        </a>

        {/**
        <Link
          className="px-4"
          to="/shop"
          title="Shop"
        >
          <FontAwesomeIcon
            icon={Icons.faTshirt}
          />
        </Link>
        */}
      </nav>

      <nav className="max-w-xl mx-auto text-center mb-5 text-base">
        <Link className="px-2" to="/policies/privacy/">
          Privacy
        </Link>

        <Link className="px-2" to="/policies/terms/">
          Terms
        </Link>
      </nav>

      <p className="font-normal text-center text-gray-900 text-base">
        &copy; 2020 Statically &bull; a project by
        <a
          href="https://upset.dev"
          className="ml-1 text-red-600 umami--click--link-footer-upsetdev"
        >
          upset.dev
        </a>
      </p>
    </footer>
  );
}

export default Footer;
