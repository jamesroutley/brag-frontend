import 'babel-polyfill';

import React from 'react';

import TextAreaWithMarkdownPreview from './text-area-with-markdown-preview';

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
        <form className="postForm" onSubmit={this.handleSubmit}>
          <input
            className="postFormTitle" type="text" placeholder="Title"
            value={this.state.title} onChange={this.handleTitleChange}
          />
          <TextAreaWithMarkdownPreview
            handleBodyChange={this.handleBodyChange}
            body={this.state.body}
          />

          <input className="postFormSubmit" type="submit" value="Post" />
        </form>
        <hr />
      </div>
    );
  }
}

export default PostForm;
