import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Features from '../components/features';
import Social from '../components/social';
import SponsorPlatinum from '../components/sponsor-platinum';
import SponsorPlatinum2 from '../components/sponsor-platinum2';
//import cloudfrontLogo from '../../static/images/sponsors/cloudfront.svg';
//import gccdnLogo from '../../static/images/sponsors/google-cloud-cdn.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Optimization &amp; CDN for images, CSS, JavaScript, open source, and much more"
        keywords={[
          `statically`,
          `open source`,
          `free image cdn`,
          `free wordpress cdn`,
          `image optimization`,
          `image processing`,
          `static files`,
          `optimization`,
          `cdn`,
          'web tools',
          'web performance',
          'web optimization',
        ]}
      />

      <div className="px-4 py-8">
        <section className="mb-24 text-center max-w-5xl mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold inline-block max-w-4xl mt-8 mb-4">
            Tools for optimizing your web projects.
          </h1>

          <Features />

          <div className="flex content-center flex-wrap mt-16">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Built for developers
                </div>
                <p className="text-gray-900 text-base">
                  Works with many static assets, supports file optimization and
                  processing.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Unlimited traffic</div>
                <p className="text-gray-900 text-base">
                  No traffic limits or throttling. Files are served via super
                  fast global CDNs.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Push to serve</div>
                <p className="text-gray-900 text-base">
                  Integrated with your favorite tools: GitHub, GitLab, and
                  Bitbucket.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-bold mb-5">multi-CDN powered by</h3>

            <SponsorPlatinum />

            {/*
            <div className="mt-8">
              <span className="font-bold mb-5 mr-5">and</span>
              <a className="sponsors-logo mr-5">
                <img
                  className="inline w-auto"
                  src={cloudfrontLogo}
                  alt="Amazon CloudFront"
                  title="Amazon CloudFront"
                />
              </a>

              
              <a className="sponsors-logo">
                <img
                  style={{ maxWidth: '50px' }}
                  className="inline w-auto"
                  src={gccdnLogo}
                  alt="Google Cloud CDN"
                  title="Google Cloud CDN"
                />
              </a>
            </div>
            */}
          </div>
        </section>

        <section className="mb-20 max-w-5xl mx-auto px-4 md:px-0">
          <label class="block">
            <input type="text" class="form-input block w-full p-4 border-gray-600" placeholder="search packages on npm" />
          </label>
        </section>

        <div className="border-b"></div>

        <Social />

        <div className="border-b"></div>

        <section className="mt-20 max-w-4xl mx-auto px-4 md:px-0">
          <h3 className="text-center font-bold mb-5">Our Supporters</h3>

          <SponsorPlatinum2 />
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
