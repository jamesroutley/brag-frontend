import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Post from './post';
import PostForm from './post-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url, { mode: 'cors' })
      .then(response => (
        response.json()
      )).then(jsonData => (
        this.setState({ posts: jsonData.posts })
      )).catch(error => console.error(error));
  }

  render() {
    const posts = this.state.posts.map(post => (
      <Post title={post.title} body={post.body} key={post.id} />
    ));
    console.log(posts);
    return (
      <div>
        <h1>Brag.</h1>
        <PostForm />
        {posts.length ? posts : 'No posts found'}
      </div>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.string.isRequired,
};

const apiUrl = 'https://l1xcmh27r8.execute-api.eu-west-1.amazonaws.com/dev/';

ReactDOM.render(<App url={apiUrl} />, document.querySelector('.app'));
