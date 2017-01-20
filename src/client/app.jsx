import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

const UserInput = () => (
  <div>
    <h1>User Input</h1>
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Body" />
      <input type="submit" value="Post" />
    </form>
    <hr />
  </div>
);

const Post = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    <hr />
  </div>
);

Post.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
};

const App = (props) => {
  const posts = props.message.Posts.map(message => (
    <Post title={message.Title} body={message.Body} />
  ));
  return (
    <div>
      <UserInput />
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
      Body: 'body0',
    },
    {
      Title: 'post1',
      Body: 'body2',
    },
    {
      Title: 'post3',
      Body: 'body3',
    },
  ],
};

ReactDOM.render(<App message={MockData} />, document.querySelector('.app'));
