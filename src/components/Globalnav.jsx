import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'
import '../scss/globalnav'

class Globalnav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [
        {
          path: '/',
          text: 'CNC'
        },
        {
          path: '/blog',
          text: 'Blog'
        },
        {
          path: '/work',
          text: 'Work'
        },
        {
          path: '/contact',
          text: 'Contact'
        },
        {
          path: '/about',
          text: 'About'
        }
      ]
    }
  }

  render() {
    return (
      <nav id="globalnav" className='globalnav'>
        <div className="container w980">
          <ul className="gn-list flex flex-between">
            {
              this.state.menus.map(i => (
                <li><NavLink to={i.path}>{i.text}</NavLink></li>
              ))
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Globalnav