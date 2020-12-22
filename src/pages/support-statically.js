import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SponsorPlatinum from '../components/sponsor-platinum';
import SponsorPlatinum2 from '../components/sponsor-platinum2';
import cleanbrowsingLogo from '../../static/images/sponsors/cleanbrowsing.png';
import uptimerobotLogo from '../../static/images/sponsors/uptimerobot.svg';
import cloudkilatLogo from '../../static/images/sponsors/cloudkilat.png';

function SupportStaticallyPage() {
  return (
    <Layout>
      <SEO
        title="Support Statically"
        description="Exclusively sponsor Statically and have your company logo placed on this website."
        keywords={[`statically`, `sponsorship`, `partnership`]}
      />

      <div className="px-4 md:px-8">
        <section className="mt-24 mb-20 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="page-title">Become A Sponsor</h1>
            <h2 className="page-desc">
              Exclusively sponsor Statically and have your company logo placed
              on this website.
            </h2>

            <div className="mt-8">
              <a
                className="btn btn-primary m-2"
                href="https://www.patreon.com/fransallen"
                rel="noopener noreferrer"
                target="_blank"
              >
                Become A Sponsor
              </a>

              <a
                className="btn m-2"
                href="https://www.paypal.me/fransallen"
                rel="noopener noreferrer"
                target="_blank"
              >
                One-time $1 via PayPal
              </a>
            </div>

            <div className="sponsor-platinum mt-20">
              <h3 className="text-2xl font-bold mb-10">Platinum</h3>

              <SponsorPlatinum />

              <SponsorPlatinum2 />
            </div>

            <div className="sponsor-bronze mt-20">
              <h3 className="text-2xl font-bold mb-10">Bronze</h3>

              <div className="flex content-center items-center max-w-2xl mx-auto flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 md:ml-6">
                  <a
                    href="https://cleanbrowsing.org"
                    className="sponsors-logo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="max-w-xs mx-auto"
                      src={cleanbrowsingLogo}
                      alt="CleanBrowsing"
                    />
                  </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 md:-mr-8">
                  <a
                    href="https://uptimerobot.com"
                    className="sponsors-logo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      style={{ height: '25px' }}
                      className="max-w-xs m-auto"
                      src={uptimerobotLogo}
                      alt="Uptime Robot"
                    />
                  </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
                  <a
                    href="https://www.cloudkilat.com"
                    className="sponsors-logo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="max-w-xs mx-auto"
                      src={cloudkilatLogo}
                      alt="CloudKilat"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default SupportStaticallyPage;
