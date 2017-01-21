import 'babel-polyfill';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from 'react-markdown';


const TextAreaWithMarkdownPreview = props => (
  <div>
    <Tabs
      selectedIndex={0}
    >
      <TabList>
        <Tab>Write</Tab>
        <Tab>Preview</Tab>
      </TabList>
      <TabPanel>
        <textarea
          className="bragFormBody" type="text"
          value={props.body}
          onChange={props.handleBodyChange}
          placeholder="Write about your experience"
        />
      </TabPanel>
      <TabPanel>
        <ReactMarkdown source={props.body || 'Nothing to preview'} escapeHtml />
      </TabPanel>
    </Tabs>
  </div>
);


TextAreaWithMarkdownPreview.propTypes = {
  body: React.PropTypes.string.isRequired,
  handleBodyChange: React.PropTypes.func.isRequired,
};

export default TextAreaWithMarkdownPreview;
