import React from 'react';
import { Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import Layout from '../components/layout';
import SEO from '../components/seo';
import Social from '../components/social';
import SponsorPlatinum from '../components/sponsor-platinum';
import SponsorPlatinum2 from '../components/sponsor-platinum2';
import cloudfrontLogo from '../../static/images/sponsors/cloudfront.svg';
import gccdnLogo from '../../static/images/sponsors/google-cloud-cdn.svg';

import testiJames from '../../static/images/testimonials/james-lepage.jpg';

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
          <h1 className="font-heading text-7xl font-black inline-block mt-16 mb-8 leading-none tracing-tighter">
            The all-in-one solution for modern web apps
          </h1>
          <p className="text-xl text-gray-800">
            Statically is a cloud-based service that gives you the best experience for <strong>automatic image optimization</strong> and <strong>text-based files compression</strong> like <strong>CSS</strong> and <strong>JavaScript</strong> so you can keep focus on building cool stuff.
          </p>

          <div className="text-left mt-20">
            <span className="uppercase text-blue-500 font-bold">Built for everyone</span>
            <h3 className="text-4xl font-heading font-bold mt-1">
              Load code from Git directly to your browser
            </h3>
            <p className="text-xl max-w-4xl mt-5 text-gray-800">
              Simply use our converter tool or manually type a URL in the address bar, your code will live right away. No server needed, just a URL.
            </p>
            <Link
              className="block text-lg mt-3 text-blue-500 inline-block"
              to="/docs/using-staticzap/"
            >
              Learn more
              <FontAwesomeIcon className="ml-2" icon={Solid.faLongArrowAltRight} />
            </Link>

            <div className="grid grid-cols-2 mt-20">
              <div className="text-5xl mt-16 ml-10 relative">
                <div>
                  <a className="cursor-pointer bg-white shadow p-5 m-5 inline-block rounded-full">
                    <FontAwesomeIcon icon={Brands.faGithub} />
                  </a>
                  <a className="cursor-pointer bg-white shadow p-5 m-5 inline-block rounded-full">
                    <FontAwesomeIcon icon={Brands.faGitlab} />
                  </a>
                </div>
                <div>
                  <a className="cursor-pointer bg-white shadow p-5 m-5 inline-block rounded-full">
                    <FontAwesomeIcon icon={Brands.faBitbucket} />
                  </a>
                  <a className="cursor-pointer bg-white shadow p-5 m-5 inline-block rounded-full">
                    <FontAwesomeIcon icon={Brands.faWordpress} />
                  </a>
                </div>
                <svg class="absolute top-70 right-full transform translate-x-1/3 -translate-y-1/4 -z-10" width="300" height="300" fill="none" viewBox="0 0 300 300">
                  <defs>
                    <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect>
                    </pattern>
                  </defs>
                  <rect width="300" height="300" fill="url(#svg-pattern-squares-1)"></rect>
                </svg>
              </div>

              <div className="-left-20 relative">
                <div className="bg-white shadow-lg rounded border-t border-gray-100">
                  <div className="flex-none h-11 flex items-center px-4">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                      <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                      <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                    </div>
                    <span className="ml-3 text-gray-500">style.css</span>
                  </div>
                  <div className="border-t p-4">
                    <pre className="text-gray-700">
                      <code>
                        {`html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

main {
  display: block;
}

...`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded -top-52 left-20 relative border-t border-gray-100">
                  <div className="flex-none h-11 flex items-center px-4">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                      <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                      <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                    </div>
                    <span className="ml-3 text-gray-500">cdn.statically.io/gh/../style.min.css</span>
                  </div>
                  <div className="border-t p-4 max-w-xl">
                    <pre className="text-gray-700 whitespace-pre-wrap">
                      <code>
                        {`html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left -mt-20">
            <span className="uppercase text-pink-600 font-bold">Instant performance</span>
            <h3 className="text-4xl font-heading font-bold mt-1">
              Real-time and automatic image optimization
            </h3>
            <p className="text-xl max-w-4xl mt-5 text-gray-800">
              No need to wait, your images will be optimized instantly. Adjust URL parameters to change the compression level or use <strong>f=auto</strong> to let Statically automate everything for you.
            </p>
            <Link
              className="block text-lg mt-3 text-pink-600 inline-block"
              to="/docs/using-images/"
            >
              Learn more
              <FontAwesomeIcon className="ml-2" icon={Solid.faLongArrowAltRight} />
            </Link>

            <Tabs
              className="flex mt-5 text-gray-800"
              selectedTabClassName="bg-pink-500 text-white"
            >
              <div className="w-1/3 text-center text-lg mt-5 mr-16 font-bold">
                <TabList>
                  <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-72">
                    WebP conversion
                  </Tab>
                  <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-72">
                    Resize by width
                  </Tab>
                  <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-72">
                    Resize by height
                  </Tab>
                  <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-72">
                    Change quality
                  </Tab>
                </TabList>
              </div>
              <div className="w-full" style={{height: '32rem'}}>
                <TabPanel>
                  <div>
                    <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/f=auto/dog.jpg" />
                    <caption className="mt-5 text-gray-800 text-center">https://cdn.statically.io/img/static.web.id/<strong>f=auto</strong>/dog.jpg</caption>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/w=600/dog.jpg" />
                    <caption className="mt-5 text-gray-800 text-center">https://cdn.statically.io/img/static.web.id/<strong>w=600</strong>/dog.jpg</caption>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/h=450/dog.jpg" />
                    <caption className="mt-5 text-gray-800 text-center">https://cdn.statically.io/img/static.web.id/<strong>h=450</strong>/dog.jpg</caption>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/q=50/dog.jpg" />
                    <caption className="mt-5 text-gray-800 text-center">https://cdn.statically.io/img/static.web.id/<strong>q=50</strong>/dog.jpg</caption>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
            <div className="relative">
              <svg class="absolute -top-52 left-full transform -translate-x-1/2 -z-10" width="300" height="300" fill="none" viewBox="0 0 300 300">
                <defs>
                  <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect>
                  </pattern>
                </defs>
                <rect width="300" height="300" fill="url(#svg-pattern-squares-1)"></rect>
              </svg>
            </div>
          </div>

          <div className="text-left mt-24">
            <span className="uppercase text-green-500 font-bold">Easy-to-use</span>
            <h3 className="text-4xl font-heading font-bold mt-1">
              You can use it without creating an account
            </h3>
            <p className="text-xl max-w-4xl mt-5 text-gray-800">
              A smooth solution for what you need to build great web apps. From file optimization to converting text and web pages into visuals, made easy.
            </p>
            <Link
              className="block text-lg mt-3 text-green-500 inline-block"
              to="/docs/misc/"
            >
              Learn more
              <FontAwesomeIcon className="ml-2" icon={Solid.faLongArrowAltRight} />
            </Link>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Images</h4>
                <p className="text-sm my-2">Resize, compress, and WebP conversion for all of your images.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-screenshot/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Staticzap</h4>
                <p className="text-sm my-2">Load your code from Git and SVN via fast global content delivery network.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-screenshot/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Screenshot</h4>
                <p className="text-sm my-2">Programmatic website screenshot to create image and PDF versions of your website.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-screenshot/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Icon</h4>
                <p className="text-sm my-2">Be productive by building a project that displays the favicon of sites on the internet.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-icon/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Avatar</h4>
                <p className="text-sm my-2">Create a dummy image for your users who haven't set a profile photo yet.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-avatar/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">OG Image</h4>
                <p className="text-sm my-2">Automatic OG image maker to increase visibility on social media.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-og-image/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Country Flags</h4>
                <p className="text-sm my-2">Curated list of country flag images, simply download or embed them into your projects.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-country-flags-cdn/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Emoji</h4>
                <p className="text-sm my-2">Make your project more interactive by adding emojis.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-emoji-cdn/">How to use</Link>
              </div>

              <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-5 cursor-pointer">
                <h4 className="font-bold text-xl">Libs</h4>
                <p className="text-sm my-2">Thousands of web frameworks and libraries in one domain.</p>
                <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-libs/">How to use</Link>
              </div>
            </div>
          </div>

          <div className="mt-32 mx-auto max-w-2xl">
            <h3 className="text-5xl font-heading font-bold">
              What People Say
            </h3>

            <Tabs selectedTabClassName="selected-testi">
              <div className="mt-28 text-2xl font-bold">
                <TabPanel>
                  "Quick integration, simple backend, and solid speed benefits. Definitely check it out!"
                  
                  <div className="font-normal text-xl mt-5">
                    James LePage <FontAwesomeIcon className="text-red-400" icon={Solid.faAt}/> Isotropic Design
                  </div>
                </TabPanel>

                <TabPanel>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel fringilla ligula."

                  <div className="font-normal text-xl mt-5">
                    Leon Stafford <FontAwesomeIcon className="text-red-400" icon={Solid.faAt}/> WP2Static
                  </div>
                </TabPanel>

                <TabPanel>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel fringilla ligula."

                  <div className="font-normal text-xl mt-5">
                    Julien Danjou <FontAwesomeIcon className="text-red-400" icon={Solid.faAt}/> Mergify
                  </div>
                </TabPanel>
              </div>

              <div className="mt-10">
                <TabList className="flex justify-center">
                  <Tab className="m-2">
                    <img className="w-14 h-14 rounded-full p-1 border hover:shadow-lg cursor-pointer" src={testiJames} />
                  </Tab>
                  <Tab className="m-2">
                    <img className="w-14 h-14 rounded-full p-1 border hover:shadow-lg cursor-pointer" src="https://github.com/leonstafford.png" />
                  </Tab>
                  <Tab className="m-2">
                    <img className="w-14 h-14 rounded-full p-1 border hover:shadow-lg cursor-pointer" src="https://github.com/jd.png" />
                  </Tab>
                </TabList>
              </div>
            </Tabs>

            <a className="mt-8 inline-block p-2 rounded hover:bg-blue-100" href=""><FontAwesomeIcon className="mr-1" icon={Solid.faPenAlt}/> Add your review</a>
          </div>

          <div className="flex content-center flex-wrap mt-96">
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
                  style={{maxWidth: '50px'}}
                  className="inline w-auto"
                  src={gccdnLogo}
                  alt="Google Cloud CDN"
                  title="Google Cloud CDN"
                />
              </a>
            </div>
          </div>
        </section>

        {/*
        <section className="mb-20 max-w-5xl mx-auto px-4 md:px-0">
          <label className="block">
            <input type="text" className="form-input block w-full p-4 border-gray-600" placeholder="Search packages on npm" />
          </label>
        </section>
        */}

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
