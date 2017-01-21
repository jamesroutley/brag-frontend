import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Brag from './brag';
import BragForm from './brag-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brags: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url, { mode: 'cors' })
      .then(response => (
        response.json()
      )).then(jsonData => (
        this.setState({ brags: jsonData.brags })
      )).catch(error => console.error(error));
  }

  render() {
    const brags = this.state.brags.map(brag => (
      <Brag title={brag.title} body={brag.body} key={brag.id} />
    ));
    console.log(brags);
    return (
      <div>
        <h1>Brag.</h1>
        <BragForm />
        {brags.length ? brags : 'No posts found'}
      </div>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.string.isRequired,
};

const apiUrl = 'https://l1xcmh27r8.execute-api.eu-west-1.amazonaws.com/dev/';

ReactDOM.render(<App url={apiUrl} />, document.querySelector('.app'));
