import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";
import * as Brands from '@fortawesome/free-brands-svg-icons';
import staticallyLogo from '../../static/images/branding/statically-logo-dark.svg';

function Footer() {
  return (
    <footer className="mt-20 mb-24">
      <nav className="flex flex-wrap mx-auto mb-5 px-5 xl:px-0">
        <div className="w-full sm:w-1/4 md:w-1/5 pb-6">
          <img className="h-6" src={staticallyLogo} alt="Statically logo" />
          <p className="text-gray-700 mt-5 pr-6">
            Statically is a cloud-based service for managing digital assets on production.
          </p>
        </div>

        <div className="w-full sm:w-1/4 md:w-1/5 pb-6">
          <h3 className="font-bold">Products</h3>
          <ul className="space-y-1 mt-5">
            <li>
              <Link to="/docs/">CDN</Link>
            </li>
            <li>
              <Link to="/docs/">Image Optimization</Link>
            </li>
            <li>
              <Link to="/docs/">Image Generator</Link>
            </li>
            <li>
              <Link to="/docs/">File Minification</Link>
            </li>
            <li>
              <Link to="/docs/">Web Screenshot</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/4 md:w-1/5 pb-6">
          <h3 className="font-bold">Support</h3>
          <ul className="space-y-1 mt-5">
            <li>
              <Link to="/docs/faqs/">FAQs</Link>
            </li>

            <li>
              <a href="https://statically.discourse.group/">Community</a>
            </li>

            <li>
              <Link to="/blog/">Contact Us</Link>
            </li>

            <li>
              <a href="https://status.statically.io/">Network Status</a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/4 md:w-1/5 pb-6">
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-1 mt-5">
            <li>
              <Link to="/about/">About Us</Link>
            </li>

            <li>
              <Link to="/blog/">Blog</Link>
            </li>

            <li>
              <Link to="/press/">Press</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/4 md:w-1/5 pb-6 md:-ml-10">
          <form
              action="https://statically.us18.list-manage.com/subscribe/post?u=4dfd4ae04677bf4f6248182fc&amp;id=397ea962f2"
              name="Contact Form"
              method="POST"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <label className="flex items-center border border-black px-4 rounded mb-2">
                <span><FontAwesomeIcon icon={Solid.faEnvelope}/></span>
                <input
                  className="form-input w-full"
                  id="email"
                  name="EMAIL"
                  type="email"
                  placeholder="frans@example.com"
                  required
                />
              </label>

              <button className="btn w-full" type="submit">
                Subscribe
              </button>
            </form>
        </div>
      </nav>

      <nav className="max-w-xl mx-auto text-center text-3xl my-10">
        <a
          className="px-4 text-blue-400"
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

        <Link
          className="px-4 text-green-400"
          to="/shop/"
          title="Shop"
        >
          <FontAwesomeIcon
            icon={Solid.faTshirt}
          />
        </Link>
      </nav>

      <nav className="max-w-xl mx-auto text-center mb-5">
        <Link className="px-2" to="/policies/privacy/">
          Privacy
        </Link>

        <Link className="px-2" to="/policies/terms/">
          Terms
        </Link>

        <Link className="px-2" to="/abuse/">
          Abuse
        </Link>
      </nav>

      <p className="font-normal text-center text-gray-900">
        &copy; 2021 Statically
      </p>
    </footer>
  );
}

export default Footer;
