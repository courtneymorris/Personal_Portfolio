import React, { Component } from "react";
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from './Portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth'
import NoMatch from './pages/no-match';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    })
    .then(response=> {
      console.log("logged_in return", response);
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route path="/blog" component={Blog} />
    ]
  }

    render() {
      return (
        <div className='container'>
          <Router>
            <div>
              <NavigationContainer loggedInStatus={this.state.loggedInStatus} />

              <h2>{this.state.loggedInStatus}</h2>

              <Switch>
                <Route exact path="/" component={Home} />

                <Route
                  path="/auth"
                  render={props => (
                    <Auth
                      {...props}
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                    />
                  )}
                />
                
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
                <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>


        </div>
      );
    }
}
