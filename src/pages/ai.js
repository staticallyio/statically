import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function StaticallyAIPage() {
  return (
    <Layout>
      <SEO
        title="Statically AI"
        description="AI-powered web optimization."
        keywords={[`statically`, `ai`, `web`, `optimization`]}
      />

      <div className="px-4 md:px-8">
        <section className="mt-24 mb-20 max-w-6xl mx-auto">
          <div className="flex">
            <div className="w-full md:w-1/2 lg:w-1/2">
                <h1 className="text-6xl font-black leading-tight">
                    Speed up your sites with Statically
                </h1>
                <h2 className="mt-5 text-xl text-gray-700 max-w-2xl">
                    A smart way to deploy and optimize your sites at scale. Statically lets you automate everything like <span className="text-black">delivering images with best-possible compression</span> for mobile and desktop.
                </h2>

                <div className="mt-8">
                    <a className="btn" href="#">
                        Join our waitlist
                    </a>
                </div>
            </div>

          </div>

          <h1>Get every web optimization benefits with Statically</h1>
          <h1>CDN that adapts to its visitors</h1>
          <p>With Statically, each your asset can be replicated to meet visitors needs. We detect wheter the content is accessed on mobile or desktop, with slow or fast internet, then we deliver the best.</p>
        </section>
      </div>
    </Layout>
  );
}

export default StaticallyAIPage;
