import 'babel-polyfill';

import React from 'react';
import ReactMarkdown from 'react-markdown';

const Brag = props => (
  <div>
    <h1>{props.title}</h1>
    <ReactMarkdown source={props.body} escapeHtml />
    <hr />
  </div>
);

Brag.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
};


export default Brag;
