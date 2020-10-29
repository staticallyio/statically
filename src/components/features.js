import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import loadCarbonAds from '../hooks/carbonads';

const Features = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadCarbonAds(() => {
      setLoaded(true);
    });
  });

  return (
    <Tabs
      className="mx-auto my-8"
      selectedTabClassName="border-b-4 border-black"
    >
      <TabList className="flex border-b my-8 md:justify-center overflow-x-auto">
        <Tab>
          <a className="inline-block py-2 px-4 font-semibold cursor-pointer">
            STATICZAP
          </a>
        </Tab>
        <Tab>
          <a className="inline-block py-2 px-4 font-semibold cursor-pointer">
            IMAGES
          </a>
        </Tab>
        <Tab>
          <a className="inline-block py-2 px-4 font-semibold cursor-pointer">
            WORDPRESS
          </a>
        </Tab>
        <Tab>
          <a className="inline-block py-2 px-4 font-semibold cursor-pointer">
            SCREENSHOT
          </a>
        </Tab>
        <Tab>
          <a className="inline-block py-2 px-4 font-semibold cursor-pointer">
            AVATAR
          </a>
        </Tab>
        <Tab>
          <a className="inline-block py-2 px-4 font-semibold cursor-pointer">
            OG IMAGE
          </a>
        </Tab>
      </TabList>

      <div className="usage-box rounded-lg p-4 md:p-12 text-left overflow-x-auto">
        <TabPanel>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Serve open source files quickly
          </h3>

          <p className="text-gray-900 inline-block md:hidden">
            <FontAwesomeIcon icon={Icons.faBolt} />
            <strong> CDN base</strong>: https://cdn.statically.io
          </p>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Serve file from GitHub
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /gh/:user/:repo/:tag/:file
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Serve file from GitLab
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /gl/:user/:repo/:tag/:file
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Serve file from Bitbucket
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /bb/:user/:repo/:tag/:file
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Live demo</p>
          <p className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/gh/mrdoob/three.js/dev/build/three.min.js"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /gh/mrdoob/three.js/dev/build/three.min.js
            </a>
          </p>

          <div className="mt-4">
            or use

            <Link className="btn btn-secondary btn-sm ml-2 mr-2 umami--click--btn-convert -mb-2" to="/convert/">
              Convert
            </Link>

            to easily convert links.
          </div>

          <div className="text-sm text-gray-700 mt-8">
            <FontAwesomeIcon icon={Icons.faLightbulb} />
            <strong> ProTip:</strong> Add{' '}
            <code className="font-bold text-gray-900">.min</code> to URL of{' '}
            <strong>CSS</strong>, <strong>JS</strong>, <strong>SVG</strong>,{' '}
            <strong>HTML</strong>, and <strong>XML</strong> files to get a
            minified version.
          </div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Optimize and resize images effortlessly
          </h3>

          <p className="text-gray-900 inline-block md:hidden">
            <FontAwesomeIcon icon={Icons.faBolt} />
            <strong> CDN base</strong>: https://cdn.statically.io
          </p>

          <p className="md:text-lg font-semibold mt-4 mb-1">Quick start</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/:image
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Resize image by width (w=:pixel)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/w=:pixel/:image
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Resize image by height (h=:pixel)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/h=:pixel/:image
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Enable auto-WebP (f=auto)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/f=auto/:image
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Adjust quality (q=:percentage)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/q=:percentage/:image
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Combine params</p>
          <p className="text-gray-800 text-sm mb-1">
            Params can be combined using commas and after /img/:domain/ path.
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/f=auto,w=:pixel/:image
          </a>
          <a className="text-gray-800 block mt-2">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /img/:domain/h=:pixel,q=:percentage/:image
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Live demo</p>
          <p className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/img/static.web.id/w=300,h=500/cat.jpg"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /img/static.web.id/w=300,h=500/cat.jpg
            </a>
          </p>
          <p className="text-gray-800 mt-2">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/img/static.web.id/f=auto,w=600,h=400/dog.jpg"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /img/static.web.id/f=auto,w=600,h=400/dog.jpg
            </a>
          </p>

          <div className="text-sm text-gray-700 mt-8 max-w-xl">
            <FontAwesomeIcon icon={Icons.faInfoCircle} />
            <span>
              <strong> A feature:</strong> WebP will automatically served when
              image is smaller than the original (currently available over
              Cloudflare only).
            </span>
          </div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Accelerate WordPress static assets instantly
          </h3>

          <p className="mt-2">
            Thanks to our official WordPress plugin, it allows you to easily
            optimize static files like images, JavaScript &amp; CSS, on-the-fly,
            and serve them from our global CDNs.
          </p>
          <Link className="btn btn-secondary btn-sm mt-4" to="/wordpress/">
            Integrate now!
          </Link>

          <p className="text-gray-900 mt-4 md:hidden">
            <FontAwesomeIcon icon={Icons.faBolt} />
            <strong> CDN base</strong>: https://cdn.statically.io
          </p>

          <p className="md:text-lg font-semibold mt-4 mb-1">WP Core CDN</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /wp/c/:version/:file
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">WP Plugins CDN</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /wp/p/:plugin/:version/:file
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">WP Themes CDN</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /wp/t/:theme/:version/:file
          </a>

          <div className="text-sm text-gray-700 mt-8">
            <FontAwesomeIcon icon={Icons.faInfoCircle} />
            <span>
              {' '}
              All files on WP Core CDN, Plugins CDN, and Themes CDN are mirros
              from WordPress SVN.
            </span>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Automagically converts URL to image and PDF
          </h3>

          <p className="text-gray-900 inline-block md:hidden">
            <FontAwesomeIcon icon={Icons.faBolt} />
            <strong> CDN base</strong>: https://cdn.statically.io
          </p>

          <p className="md:text-lg font-semibold mt-4 mb-1">Quick start</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /screenshot/:url
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Getting mobile version (device=mobile)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /screenshot/device=mobile/:url
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Getting full page (full=true)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /screenshot/full=true/:url
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Combine params</p>
          <p className="text-gray-800 text-sm mb-1">
            Params can be combined using commas and after /screenshot/ path.
          </p>
          <a className="text-gray-800 block">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /screenshot/device=mobile,full=true/:url
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Live demo</p>
          <p className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/screenshot/google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /screenshot/google.com
            </a>
          </p>
          <p className="text-gray-800 mt-2">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/screenshot/full=true/wikipedia.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /screenshot/full=true/wikipedia.org
            </a>
          </p>

          <div className="text-sm text-gray-700 mt-8">
            <FontAwesomeIcon icon={Icons.faInfoCircle} />
            <span>
              {' '}
              Image resizing `w` and `h` available only on desktop mode.
            </span>
          </div>
          <div className="text-sm text-gray-700 max-w-xl">
            <FontAwesomeIcon icon={Icons.faInfoCircle} />
            <span>
              {' '}
              Screenshot can also be accessed using `/s/` path which will be
              redirected to `/screenshot/` for practical use purposes.
            </span>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Easily generate beautiful avatar images
          </h3>

          <p className="text-gray-900 inline-block md:hidden">
            <FontAwesomeIcon icon={Icons.faBolt} />
            <strong> CDN base</strong>: https://cdn.statically.io
          </p>

          <p className="md:text-lg font-semibold mt-4 mb-1">Quick start</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /avatar/:text
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Resize by size (s=:pixel)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /avatar/s=:pixel/:text
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Use circle shape (shape=circle)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /avatar/shape=circle/:text
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Use rounded shape (shape=rounded)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /avatar/shape=rounded/:text
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Live demo</p>
          <p className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/avatar/foo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /avatar/foo
            </a>
          </p>
          <p className="text-gray-800 mt-2">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/avatar/shape=circle/bar"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /avatar/shape=circle/bar
            </a>
          </p>
          <p className="text-gray-800 mt-2">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/avatar/shape=rounded/you"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /avatar/shape=rounded/you
            </a>
          </p>

          <div className="text-sm text-gray-700 mt-8">
            <FontAwesomeIcon icon={Icons.faInfoCircle} />
            <span>
              {' '}
              This service is open source, code available on{' '}
              <a
                className="text-red-600"
                href="https://github.com/fransallen/avatar"
              >
                GitHub
              </a>
              .
            </span>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Create beautiful Open Graph images with ease
          </h3>

          <p className="text-gray-900 inline-block md:hidden">
            <FontAwesomeIcon icon={Icons.faBolt} />
            <strong> CDN base</strong>: https://cdn.statically.io
          </p>

          <p className="md:text-lg font-semibold mt-4 mb-1">Quick start</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /og/:text.jpg
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Use dark theme (theme=dark)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /og/theme=dark/:text.jpg
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">
            Set font size (fontsize=:numeric)
          </p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /og/fontsize=:numeric/:text.jpg
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Use PNG (.png)</p>
          <a className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /og/:text.png
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Combine params</p>
          <p className="text-gray-800 text-sm mb-1">
            Params can be combined using commas and after /og/ path.
          </p>
          <a className="text-gray-800 block">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <span className="hidden md:inline-block">
              https://cdn.statically.io
            </span>
            /og/theme=dark,fontsize=:numeric/:text.jpg
          </a>

          <p className="md:text-lg font-semibold mt-4 mb-1">Live demo</p>
          <p className="text-gray-800">
            <span className="bg-gray-200 border rounded p-1 mr-1">GET</span>
            <a
              className="text-red-600"
              href="https://cdn.statically.io/og/Hello World.jpg"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden md:inline-block">
                https://cdn.statically.io
              </span>
              /og/Hello World.jpg
            </a>
          </p>

          <div className="text-sm text-gray-700 mt-8">
            <FontAwesomeIcon icon={Icons.faLightbulb} />
            <span>
              {' '}
              Use our{' '}
              <Link className="text-red-600" to="/wordpress/">
                official WordPress plugin
              </Link>{' '}
              to auto-generate OG Image meta tag for your website.
            </span>
          </div>
        </TabPanel>

        <div id="ads" className="float-none mt-8 lg:float-right lg:block lg:-mt-32"></div>
      </div>
    </Tabs>
  );
}

export default Features;
