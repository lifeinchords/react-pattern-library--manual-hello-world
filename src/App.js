import React, {Component} from 'react';
import Paragraph from './Paragraph';

export default class App extends React.Component {
  render() {
    return (
      < div className="my-app">
        <h1>This is React!!!</h1>
        <Paragraph text="First Paragraph" />
        <Paragraph text="Second Paragraph" />
      </div>
    );
  }
}