import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './Components/Navigation';
import Home from './Components/Home';
import App from './Components/App';
import Quote from './Components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
