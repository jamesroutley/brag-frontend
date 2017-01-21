import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    const post = {
      Title: this.state.title,
      Body: this.state.body,
    };
    this.setState({
      body: '',
      title: '',
    });
    console.log(post);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>User Input</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text" placeholder="Title"
            value={this.state.title} onChange={this.handleTitleChange}
          />
          <input
            type="text" placeholder="Body"
            value={this.state.body} onChange={this.handleBodyChange}
          />
          <input type="submit" value="Post" />
        </form>
        <hr />
      </div>
    );
  }
}

const Post = props => (
  <div>
    <h1>{props.title}</h1>
    <ReactMarkdown source={props.body} escapeHtml />
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
