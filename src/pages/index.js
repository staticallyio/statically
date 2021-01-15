import React from 'react';
import { Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import Layout from '../components/layout';
import SEO from '../components/seo';

import testiJames from '../../static/images/testimonials/james-lepage.jpg';

import fastlyLogo from '../../static/images/sponsors/fastly.svg';
import cloudflareLogo from '../../static/images/sponsors/cloudflare.svg';
import bunnyLogo from '../../static/images/sponsors/bunny.svg';
import ns1Logo from '../../static/images/sponsors/ns1.svg';
import doLogo from '../../static/images/sponsors/digitalocean.svg';
import dewawebLogo from '../../static/images/sponsors/dewaweb.png';

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

      <div className="px-4">
        <section className="text-center mx-auto max-w-5xl pt-8 pb-12">
          <h1 className="font-heading text-5xl lg:text-7xl font-black inline-block mt-16 leading-none tracing-tighter">
            The all-in-one solution for modern web apps
          </h1>
          <p className="text-xl text-gray-800 mt-8">
            Statically is a cloud-based service that gives you the best experience for <strong>automatic image optimization</strong> and <strong>text-based files compression</strong> like <strong>CSS</strong> and <strong>JavaScript</strong> so you can keep focus on building cool stuff.
          </p>

          <div className="mt-8">
            <a
              className="btn bg-blue-500 m-2"
              href="#get-started"
            >
              Get Started
            </a>
          </div>

          <div className="flex flex-wrap justify-evenly space-y-4 lg:space-y-0 mt-16">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <p className="font-bold text-2xl">10+ Billion</p>
              <p className="text-lg">request/month</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4">
              <p className="font-bold text-2xl">300 TB</p>
              <p className="text-lg">data/month</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4">
              <p className="font-bold text-2xl">600+</p>
              <p className="text-lg">points of presence</p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4">
              <p className="font-bold text-2xl">10K+</p>
              <p className="text-lg">optimized web apps</p>
            </div>
          </div>
        </section>

        <section className="text-left mx-auto pt-24 pb-12" id="get-started">
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

          <div className="lg:flex">
            <div className="text-4xl lg:text-5xl mt-16 lg:mt-24">
              <div className="flex lg:flex-wrap justify-center px-10 lg:max-w-sm">
                <a className="cursor-pointer bg-white shadow p-2 lg:p-5 m-5 inline-block rounded-full">
                  <FontAwesomeIcon icon={Brands.faGithub} />
                </a>
                <a className="cursor-pointer bg-white shadow p-2 lg:p-5 m-5 inline-block rounded-full">
                  <FontAwesomeIcon icon={Brands.faGitlab} />
                </a>
                <a className="cursor-pointer bg-white shadow p-2 lg:p-5 m-5 inline-block rounded-full">
                  <FontAwesomeIcon icon={Brands.faBitbucket} />
                </a>
                <a className="cursor-pointer bg-white shadow p-2 lg:p-5 m-5 inline-block rounded-full">
                  <FontAwesomeIcon icon={Brands.faWordpressSimple} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:w-1/2 mt-8 lg:ml-10 xl:ml-32">
              <div className="bg-white shadow-lg rounded border-t border-gray-100" style={{width: 'fit-content', height: 'fit-content'}}>
                <div className="flex-none h-11 flex items-center px-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                    <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                    <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                  </div>
                  <span className="ml-3 text-gray-500">style.css</span>
                </div>
                <div className="border-t p-4">
                  <pre className="text-gray-700 text-xs md:text-base">
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

              <div className="w-full text-center mt-10">
                <div className="inline-block lg:hidden bg-white shadow rounded-full p-2">
                  <FontAwesomeIcon icon={Solid.faArrowDown} />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded border-t border-gray-100 mt-10 lg:mt-40 lg:-mb-20 lg:-ml-56 max-w-md" style={{width: 'fit-content', height: 'fit-content'}}>
                <div className="flex-none h-11 flex items-center px-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                    <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                    <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                  </div>
                  <span className="ml-3 text-gray-500">cdn.statically.io/gh/../style.min.css</span>
                </div>
                <div className="border-t p-4">
                  <pre className="text-gray-700 whitespace-pre-wrap text-xs">
                    <code>
                      {`html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-left mx-auto pt-24 lg:pt-36 pb-12">
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
            className="flex flex-wrap md:flex-nowrap mt-5 text-gray-800"
            selectedTabClassName="bg-pink-500 text-white"
          >
            <div className="w-full md:w-1/3 text-center text-lg mt-5 md:mr-10 font-bold">
              <TabList className="flex flex-wrap justify-center">
                <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-1/2 md:w-full">
                  WebP conversion
                </Tab>
                <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-1/2 md:w-full">
                  Resize by width
                </Tab>
                <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-1/2 md:w-full">
                  Resize by height
                </Tab>
                <Tab className="cursor-pointer bg-gray-100 p-2 my-3 block rounded w-1/2 md:w-full">
                  Change quality
                </Tab>
              </TabList>
            </div>
            <div className="w-full mt-10 md:mt-0 h-auto img-tabpanel">
              <TabPanel>
                <div>
                  <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/f=auto/dog.jpg" />
                  <caption className="mt-5 text-gray-800 text-center"><span className="hidden md:inline">https://cdn.statically.io</span>/img/static.web.id/<strong>f=auto</strong>/dog.jpg</caption>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/w=600/dog.jpg" />
                  <caption className="mt-5 text-gray-800 text-center"><span className="hidden md:inline">https://cdn.statically.io</span>/img/static.web.id/<strong>w=600</strong>/dog.jpg</caption>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/h=450/dog.jpg" />
                  <caption className="mt-5 text-gray-800 text-center"><span className="hidden md:inline">https://cdn.statically.io</span>/img/static.web.id/<strong>h=450</strong>/dog.jpg</caption>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <img className="rounded-xl shadow-xl" src="https://cdn.statically.io/img/static.web.id/q=50/dog.jpg" />
                  <caption className="mt-5 text-gray-800 text-center"><span className="hidden md:inline">https://cdn.statically.io</span>/img/static.web.id/<strong>q=50</strong>/dog.jpg</caption>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </section>

        <section className="text-left mx-auto pt-24 pb-12">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Images</h4>
              <p className="text-sm my-2">Resize, compress, and WebP conversion for all of your images.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-screenshot/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Staticzap</h4>
              <p className="text-sm my-2">Load your code from Git and SVN via fast global content delivery network.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-screenshot/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Screenshot</h4>
              <p className="text-sm my-2">Programmatic website screenshot to create image and PDF versions of your website.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-screenshot/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Icon</h4>
              <p className="text-sm my-2">Be productive by building a project that displays the favicon of sites on the internet.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-icon/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Avatar</h4>
              <p className="text-sm my-2">Create a dummy image for your users who haven't set a profile photo yet.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-avatar/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">OG Image</h4>
              <p className="text-sm my-2">Automatic OG image maker to increase visibility on social media.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-og-image/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Country Flags</h4>
              <p className="text-sm my-2">Curated list of country flag images, simply download or embed them into your projects.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-country-flags-cdn/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Emoji</h4>
              <p className="text-sm my-2">Make your project more interactive by adding emojis.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-emoji-cdn/">How to use</Link>
            </div>

            <div className="bg-white hover:shadow-lg transition border hover:border-transparent rounded p-3 md:p-5 cursor-pointer">
              <h4 className="font-bold text-xl">Libs</h4>
              <p className="text-sm my-2">Thousands of web frameworks and libraries in one domain.</p>
              <Link className="text-green-500 border-b hover:border-green-500" to="/docs/using-libs/">How to use</Link>
            </div>
          </div>
        </section>

        <section className="text-center mx-auto pt-24 pb-12 max-w-2xl">
          <h3 className="text-5xl font-heading font-bold">
            What People Say
          </h3>

          <Tabs className="mt-12" selectedTabClassName="selected-testi">
            <div className="text-2xl font-bold">
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
                "Statically saves us from the burden of maintaining our own CDN."

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
        </section>

        <section className="text-left mx-auto pt-24 pb-12">
          <span className="uppercase text-purple-500 font-bold">Scalable</span>
          <h3 className="text-4xl font-heading font-bold">
            A supercharged cloud service powered by the best
          </h3>
          <p className="text-xl max-w-4xl mt-5 text-gray-800">
            Statically can run in any environment at any scale. Thanks to these amazing companies helped us on the mission for optimizing the web.
          </p>
          <Link
            className="block text-lg mt-3 text-purple-500 inline-block"
            to="/support-statically/"
          >
            Become a sponsor
            <FontAwesomeIcon className="ml-2" icon={Solid.faLongArrowAltRight} />
          </Link>

          <div className="flex flex-wrap items-center space-y-2 justify-center md:justify-start mt-10">
            <div className="w-1/2 md:w-1/6 -mr-8">
              <img className="w-28 md:w-32 transition-all grayscale hover:grayscale-none" src={fastlyLogo} alt="Fastly" />
            </div>
            <div className="w-1/2 md:w-1/6">
              <img className="w-32 md:w-36 transition-all grayscale hover:grayscale-none" src={cloudflareLogo} alt="Cloudflare" />
            </div>
            <div className="w-1/2 md:w-1/6">
              <img className="w-32 md:w-40 transition-all grayscale hover:grayscale-none" src={bunnyLogo} alt="bunny.net" />
            </div>
            <div className="w-1/2 md:w-1/6 lg:-mr-8">
              <img className="w-32 md:w-42 transition-all grayscale hover:grayscale-none" src={ns1Logo} alt="NS1" />
            </div>
            <div className="w-1/2 md:w-1/6 md:mr-8">
              <img className="w-48 transition-all grayscale hover:grayscale-none" src={doLogo} alt="DigitalOcean" />
            </div>
            <div className="w-1/2 md:w-1/6">
              <img className="w-36 md:w-44 transition-all grayscale hover:grayscale-none" src={dewawebLogo} alt="Dewaweb" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
