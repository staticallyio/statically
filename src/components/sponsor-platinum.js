import React from 'react';
import fastlyLogo from '../../static/images/sponsors/fastly.svg';
import cloudflareLogo from '../../static/images/sponsors/cloudflare.svg';
import bunnycdnLogo from '../../static/images/sponsors/bunnycdn.svg';

function SponsorPlatinum() {
  return (
    <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
      <div className="w-full md:w-1/3 lg:w-1/3 p-1">
        <a
          href="https://www.fastly.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={fastlyLogo} alt="Fastly" />
        </a>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3 md:-ml-10 p-1">
        <a
          href="https://www.cloudflare.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={cloudflareLogo} alt="Cloudflare" />
        </a>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3 p-1">
        <a
          href="https://bunnycdn.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={bunnycdnLogo} alt="BunnyCDN" />
        </a>
      </div>
    </div>
  );
}

export default SponsorPlatinum;
