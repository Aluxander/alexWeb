import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> React todos app</h1>
        <Link to="about">About</Link>
        {this.props.children}
      </div>
    );
  }
}
