import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";

import Layout from '../components/layout';
import SEO from '../components/seo';

function LoginPage() {
  return (
    <Layout>
      <SEO
        title="Login"
        description="Login to Statically."
        keywords={[`login`, `web`, `optimization`]}
      />

      <div className="px-4">
        <section className="mx-auto max-w-2xl pt-8 pb-12">
          <h1 className="font-heading text-5xl lg:text-7xl font-black inline-block mt-16 leading-none tracing-tighter">
            Manage and optimize your web assets in one dashboard
          </h1>

          <p className="text-xl mt-12">
            <strong>Finally</strong>, we are planning to add a dashboard providing a full-control for static assets on your git repos. We know that you are always looking for the simple way to globally distribute code and web libraries along with popular web assets like HTML, CSS, JavaScript, and images when you are building web projects.
          </p>

          <p className="text-xl mt-8">
            That is the main reason for Statically comes into play. <strong>To provide a better, an optimized version of your web assets.</strong> So, to give you an idea what we are trying to build, here are key points that will be the main concern when we developing the dashboard:
          </p>

          <ul className="text-xl list-disc mt-8 space-y-2 pl-4">
            <li>Image optimization control</li>
            <li>Static site deployments</li>
            <li>Storage and files management</li>
            <li>Custom domain/origin for CDN</li>
            <li>Automatic optimization for git repos' static assets</li>
            <li>Control over files on git repos that will be served via `cdn.statically.io`</li>
            <li>Purge cache</li>
            <li>Analytics</li>
          </ul>

          <p className="text-xl mt-8">
            Above points will not limit our creative and we will continue to add more functionality to the dashboard over time to provide the best experience for the art of optimizing the web. So if you are interested to become an early adopter of the Statically Platform, fill the form below with your email address and we will make sure you get notified when we are launching it!
          </p>

          <div className="mt-10 max-w-xl">
          <form
              action="https://statically.us18.list-manage.com/subscribe/post?u=4dfd4ae04677bf4f6248182fc&amp;id=397ea962f2"
              name="Sign Up Form"
              method="POST"
            >
              <input type="hidden" name="form-name" value="Sign Up Form" />
              <div className="flex items-center">
                <label className="flex items-center border-l border-t border-b border-gray-400 px-4 py-1 rounded-l mb-2">
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

                <button className="btn bg-blue-500 rounded-l-none py-4 w-1/4 -mt-2" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default LoginPage;
