import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;

    let result = total || next;
    if (total && next && operation) {
      result = `${total} ${operation.toLowerCase()} ${next}`;
    } else if (total && operation) {
      result = `${total} ${operation.toLowerCase()}`;
    }

    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display result={result || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
