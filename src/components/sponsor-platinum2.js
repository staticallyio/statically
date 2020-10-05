import React from 'react';
import ns1Logo from '../../static/images/sponsors/ns1.svg';
import digitaloceanLogo from '../../static/images/sponsors/digitalocean.svg';
import dewawebLogo from '../../static/images/sponsors/dewaweb.png';
import wp2staticLogo from '../../static/images/sponsors/wp2static.png';

function SponsorPlatinum2() {
  return (
    <div className="flex content-center items-center max-w-3xl mx-auto flex-wrap">
      <div className="w-full md:w-1/4 lg:w-1/4 md:ml-3 md:-mr-8 p-2">
        <a
          href="https://ns1.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="mx-auto md:mx-0" src={ns1Logo} alt="NS1" />
        </a>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 p-2">
        <a
          href="https://www.digitalocean.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="dewaweb max-w-xxs mx-auto"
            src={digitaloceanLogo}
            alt="DigitalOcean"
          />
        </a>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 p-2">
        <a
          href="https://www.dewaweb.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="dewaweb max-w-xxs mx-auto"
            src={dewawebLogo}
            alt="Dewaweb"
          />
        </a>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 md:-ml-8 p-2">
        <a
          href="https://wp2static.com"
          className="sponsors-logo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="wp2static max-w-xxs mx-auto"
            src={wp2staticLogo}
            alt="WP2Static"
          />
        </a>
      </div>
    </div>
  );
}
export default SponsorPlatinum2;
