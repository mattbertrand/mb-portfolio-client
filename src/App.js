import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route  component={ ErrorPage } />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
