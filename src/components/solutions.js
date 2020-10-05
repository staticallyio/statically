import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

function Solutions() {
  return (
    <section className="mt-20 mb-24 max-w-3xl mx-auto">
      <h2 className="text-center font-extrabold text-5xl mx-auto mb-16 max-w-lg">
        The all-in-one solution for open source static asset delivery
      </h2>

      <div className="border border-gray-200 shadow-2xl rounded-lg p-12">
        <div className="flex items-center flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 md:mb-0">
            <ul className="text-lg font-bold">
              <li className="p-1">
                <FontAwesomeIcon
                  icon={Icons.faCheckCircle}
                  className="text-green-400 shadow rounded-full mr-3"
                />
                Easy to use
              </li>
              <li className="p-1">
                <FontAwesomeIcon
                  icon={Icons.faCheckCircle}
                  className="text-green-400 shadow rounded-full mr-3"
                />
                Unlimited traffic
              </li>
              <li className="p-1">
                <FontAwesomeIcon
                  icon={Icons.faCheckCircle}
                  className="text-green-400 shadow rounded-full mr-3"
                />
                Unlimited optimization
              </li>
              <li className="p-1">
                <FontAwesomeIcon
                  icon={Icons.faCheckCircle}
                  className="text-green-400 shadow rounded-full mr-3"
                />
                Unlimited static files
              </li>
              <li className="p-1">
                <FontAwesomeIcon
                  icon={Icons.faCheckCircle}
                  className="text-green-400 shadow rounded-full mr-3"
                />
                Unlimited integrations
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-10 md:text-center max-w-xss mx-auto">
            <h3 className="text-3xl font-bold mb-5">
              Because static files shouldn&rsquo;t be slow.
            </h3>
            <Link
              to="/docs"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
