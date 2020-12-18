import React from 'react';
import PropTypes from 'prop-types';

function Info({ text, href, target }) {
  return (
    <a
      className="block p-2 bg-black text-white hover:text-red-300 border-b font-bold text-center"
      href={href}
      rel="noopener noreferrer"
      target={target}
      role="alert"
    >
      {text}
    </a>
  );
}

Info.defaultProps = {
  href: 'https://twitter.com/staticallyio/status/1321214043051311106',
  target: '_self',
  text: `Statically is now powered with Google Cloud CDN and Amazon CloudFront.`,
};

Info.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
};

export default Info;
