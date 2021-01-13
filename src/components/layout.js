import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-800 text-sm tracking-wide mx-auto max-w-6xl">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex flex-col flex-1 mx-auto w-full">
        {children}
      </main>

      <div className="border-b mt-20"></div>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
