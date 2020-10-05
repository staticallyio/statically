import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import abductionIllustration from '../../static/images/misc/abduction-illustration.svg';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 Not found" />
      <div className="px-4 md:px-8">
        <section className="mt-24 mb-20 max-w-4xl mx-auto text-center">
          <div className="text-center">
            <h1 className="page-title">404 Not Found</h1>
            <h2 className="page-desc">
              Looks like this page is a ghost that got abducted by
              aliens&hellip;
            </h2>
          </div>

          <div className="mt-20">
            <img
              src={abductionIllustration}
              className="block mx-auto mb-10 w-1/2"
              alt="Ghost getting abducted by aliens"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
