import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from './Portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
        <h1>Courtney Morris Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />



            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}
