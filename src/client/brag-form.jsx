import 'babel-polyfill';

import React from 'react';

import TextAreaWithMarkdownPreview from './text-area-with-markdown-preview';

class BragForm extends React.Component {
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
    const brag = {
      title: this.state.title,
      body: this.state.body,
    };
    this.setState({
      body: '',
      title: '',
    });
    // console.log(brag);
    this.props.addBrag(brag);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="bragForm" onSubmit={this.handleSubmit}>
          <input
            className="bragFormTitle" type="text" placeholder="Title"
            value={this.state.title} onChange={this.handleTitleChange}
          />
          <TextAreaWithMarkdownPreview
            handleBodyChange={this.handleBodyChange}
            body={this.state.body}
          />

          <input className="bragFormSubmit" type="submit" value="Post" />
        </form>
        <hr />
      </div>
    );
  }
}

BragForm.propTypes = {
  addBrag: React.PropTypes.func.isRequired,
};

export default BragForm;
