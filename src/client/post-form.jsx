import 'babel-polyfill';

import React from 'react';

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


export default PostForm;
