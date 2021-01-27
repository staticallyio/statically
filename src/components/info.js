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
  href: 'https://twitter.com/staticallyio',
  target: '_self',
  text: `We are currently working on new features resulting in delays in forum and email support. Follow @staticallyio on Twitter for progress.`,
};

Info.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
};

export default Info;
