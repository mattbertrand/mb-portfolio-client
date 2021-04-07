import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getPosts } from './actions'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Index from './components/Index'
import NewPost from './components/NewPost'
import ErrorPage from './components/ErrorPage'


class App extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/posts" component={ Index } />
          <Route exact path="/posts/new" component={ NewPost } />
          <Route  component={ ErrorPage } />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPosts })(App);
