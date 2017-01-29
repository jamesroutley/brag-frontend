import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

import Brag from './brag';
import BragForm from './brag-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brags: [],
      googleUser: null,
    };
    this.addBrag = this.addBrag.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.loadBrags = this.loadBrags.bind(this);
  }

  componentDidMount() {
    this.loadBrags();
    setInterval(this.loadBrags, this.props.pollInterval);
  }

  onSignIn(googleUser) {
    this.setState({ googleUser });
  }

  loadBrags() {
    fetch(this.props.url, { mode: 'cors' })
      .then(response => (
        response.json()
      )).then(jsonData => (
        this.setState({ brags: jsonData.brags })
      )).catch(error => console.error(error));
  }

  addBrag(brag) {
    const body = {
      brag,
      id_token: this.state.googleUser.getAuthResponse().id_token,
    };
    fetch(`${this.props.url}brag`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(this.loadBrags)
      .catch(error => console.error(error));
  }

  render() {
    const brags = this.state.brags.map(brag => (
      <Brag
        title={brag.title}
        body={brag.body}
        key={brag.id}
        creationTime={parseInt(brag.creation_time, 10)}
        userName={brag.name}
      />
    ));
    return (
      <div>
        <header>
          <h1>Brag.</h1>
          <p>Share technical achievements.</p>
        </header>
        {this.state.googleUser ?
          <BragForm addBrag={this.addBrag} /> :
            <GoogleLogin
              clientId="767808022091-o5p6ssp5q24va3m81ifns46taq1oa995.apps.googleusercontent.com"
              buttonText="Sign in with Google to post ->"
              onSuccess={this.onSignIn}
              onFailure={console.error}
              style={{
                display: 'block',
                background: '#fff',
                color: '#000',
                cursor: 'pointer',  // XXX: not sure why this isn't working by default
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 4,
                border: '1px solid black',
              }}
            />}
        {brags.length ? brags : 'No posts found'}
      </div>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.string.isRequired,
  pollInterval: React.PropTypes.number.isRequired,
};

const apiUrl = 'https://l1xcmh27r8.execute-api.eu-west-1.amazonaws.com/prod/';

ReactDOM.render(<App url={apiUrl} pollInterval={10000} />, document.querySelector('.app'));
