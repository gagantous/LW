import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from '../components/Blog'
import Detail from '../components/Detail'
import {StyleSheet, css} from 'aphrodite'

const Work = () => <h1>work</h1>
const Contact = () => <h1>contact</h1>
const About = () => <h1>About</h1>


class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        {
          path: '/',
          exact: true,
          component: Blog
        },
        {
          path: '/blog',
          component: Blog
        },
        {
          path: '/work',
          component: Work
        },
        {
          path: '/contact',
          component: Contact
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/blogs/:id',
          component: Detail
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.routes.map(i => (
            <Route path={i.path} exact={i.exact} component={i.component}/>
          ))
        }
      </div>
    )
  }
}

export default MainContent