import React, { Component } from 'react'
import {StyleSheet, css} from 'aphrodite'

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = StyleSheet.create({
      bg: {
        background: 'url(./src/images/bglw.jpg) no-repeat',
        backgroundSize: 'cover',
        height: '445px'
      }
    })
    return (
      <div className={"banner " + css(styles.bg)}>
        banner
      </div>
    )
  }
}

export default Banner