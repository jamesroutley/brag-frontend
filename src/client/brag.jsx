import 'babel-polyfill';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const Brag = props => (
  <div>
    <h1>{props.title}</h1>
    <ReactMarkdown source={props.body} escapeHtml />
    <p><small>Posted {moment.unix(props.creationTime).fromNow()}</small></p>
    <hr />
  </div>
);

Brag.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  creationTime: React.PropTypes.number,
};


export default Brag;
