import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as Regular from '@fortawesome/free-regular-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import staticallyMark from '../../static/images/branding/statically-mark.svg';

function Integrations() {
  return (
    <section id="integrations">
      <div className="flex content-center flex-wrap">
        <Link
          to="/bitbucket"
          className="sm:w-1/5 md:w-1/5 lg:w-1/5 mb-4 max-w-sm rounded overflow-hidden border border-gray-200 border-solid shadow-lg hover:shadow-2xl mx-auto hidden md:block"
        >
          <div className="text-center px-6 py-4">
            <FontAwesomeIcon
              icon={Brands.faBitbucket}
              className="integration-logo mx-auto"
            />
            <span className="text-sm mt-5">Bitbucket</span>
          </div>
        </Link>

        <Link
          to="/gitlab"
          className="sm:w-1/5 md:w-1/5 lg:w-1/5 mb-4 max-w-sm rounded overflow-hidden border border-gray-200 border-solid shadow-lg hover:shadow-2xl mx-auto hidden md:block"
        >
          <div className="text-center px-6 py-4">
            <FontAwesomeIcon
              icon={Brands.faGitlab}
              className="integration-logo mx-auto"
            />
            <span className="text-sm mt-5">GitLab</span>
          </div>
        </Link>

        <Link
          to="/github"
          className="sm:w-1/5 md:w-1/5 lg:w-1/5 mb-4 max-w-sm rounded overflow-hidden border border-gray-200 border-solid shadow-lg hover:shadow-2xl mx-auto"
        >
          <div className="text-center px-6 py-4">
            <FontAwesomeIcon
              icon={Brands.faGithub}
              className="integration-logo mx-auto"
            />
            <span className="text-sm mt-5">GitHub</span>
          </div>
        </Link>

        <Link
          to="/wordpress"
          className="sm:w-1/5 md:w-1/5 lg:w-1/5 mb-4 max-w-sm rounded overflow-hidden border border-gray-200 border-solid shadow-lg hover:shadow-2xl mx-auto hidden md:block"
        >
          <div className="text-center px-6 py-4">
            <FontAwesomeIcon
              icon={Brands.faWordpress}
              className="integration-logo mx-auto"
            />
            <span className="text-sm mt-5 md:ml-0 lg:-ml-2">WordPress</span>
          </div>
        </Link>

        <Link
          to="/custom"
          className="sm:w-1/5 md:w-1/5 lg:w-1/5 mb-4 max-w-sm rounded overflow-hidden border border-gray-200 border-solid shadow-lg hover:shadow-2xl mx-auto hidden md:block"
        >
          <div className="text-center px-6 py-4">
            <FontAwesomeIcon
              icon={Icons.faCubes}
              className="integration-logo mx-auto"
            />
            <span className="text-sm mt-5">Custom</span>
          </div>
        </Link>
      </div>

      <div id="statically-to-you">
        <svg width="20" height="30" viewBox="0 0 20 30" className="fetch">
          <path d="M10 40 L10 -10"></path>
        </svg>

        <img
          src={staticallyMark}
          className="integration-logo mx-auto my-2"
          alt="Statically"
          title="Statically optimizing files"
        />

        <svg width="20" height="30" viewBox="0 0 20 30" className="fetch">
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

      <div className="mt-10 text-center">
        <Link
          to="/features#integrations"
          className="text-lg text-red-600 font-bold"
        >
          <span>More integration</span>
          <FontAwesomeIcon icon={Icons.faArrowRight} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}

export default Integrations;
