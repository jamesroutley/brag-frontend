import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Post from './post';
import PostForm from './post-form';

const App = (props) => {
  const posts = props.message.Posts.map(message => (
    <Post title={message.Title} body={message.Body} />
  ));
  return (
    <div>
      <PostForm />
      {posts}
    </div>
  );
};

App.propTypes = {
  message: React.PropTypes.shape.isRequired,
};

const MockData = {
  Posts: [
    {
      Title: 'post0',
      Body: '## markdown?',
    },
    {
      Title: 'post1',
      Body: '```body2```',
    },
    {
      Title: 'post3',
      Body: 'body3',
    },
  ],
};

ReactDOM.render(<App message={MockData} />, document.querySelector('.app'));
