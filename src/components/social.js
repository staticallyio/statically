import { Link } from 'gatsby';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Regular from '@fortawesome/free-regular-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';

function Social() {
  return (
    <section className="my-20">
      <div className="flex content-center items-center max-w-xl mx-auto flex-wrap text-center text-xl">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4 md:border-r">
          <Link to="/support-statically/" className="hover:text-red-400">
            <FontAwesomeIcon icon={Regular.faLifeRing} className="mr-2" />
            Support us!
          </Link>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4">
          <a
            href="https://twitter.com/staticallyio"
            className="hover:text-blue-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={Brands.faTwitter} className="mr-2" />
            @staticallyio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
