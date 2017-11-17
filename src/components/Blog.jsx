import React, { Component } from 'react'
import Banner from './Banner'
import BlogList from './BlogList'
import {StyleSheet, css} from 'aphrodite'
import '../scss/blog'

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return [
      <Banner/>,
      <div className="blog">
        <div className="container w980">
          <BlogList/>
        </div>
      </div>
    ]
  }
}

export default Blog