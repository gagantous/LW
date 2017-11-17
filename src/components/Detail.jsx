import React, { Component } from 'react'
import {StyleSheet, css} from 'aphrodite'
import '../scss/detail'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: {},
      loading: true
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
    .then(results => {
      return results.json()
    }).then(data => (
      this.setState({
        blog: data,
        loading: false
      })
    ))
  }

  render() {
    const {title, body} = this.state.blog;
    return (
      <div className="detail">
        <div className="container w980 large-6">
          { !this.state.loading ? 
            <div>
              <div className="header">
                <div className="date">
                  <h4>BERITA</h4>
                  <h4>NOVEMBER 14, 2017</h4>
                </div>
                <div className="title">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="content">
                <div className="image">
                  image
                </div>
                <div className="text">
                  <p>{body}</p>
                </div>
              </div>
            </div>
            : <div>Loading</div>
          }
        </div>
      </div>
    )
  }
}

export default Detail