import React, { Component } from 'react'
import {StyleSheet, css} from 'aphrodite'
import '../scss/globalfooter'

class Globalfooter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer id="globalfooter" className="globalfooter">
        <div className="container w980">
          <div className="flex">
            <div className="large-3">
              <h4>About</h4>
              <p>ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae</p>
            </div>
            <div className="large-3">
              <h4>Network</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Github</a></li>
              </ul>
            </div>
            <div className="large-3">
              <h4>Work</h4>
              <ul>
                <li><a href="#">#Project1</a></li>
                <li><a href="#">#Project2</a></li>
                <li><a href="#">#Project3</a></li>
                <li><a href="#">#Project4</a></li>
                <li><a href="#">#Project5</a></li>
              </ul>
            </div>
            <div className="large-3">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">admin@example.com</a></li>
                <li><p>+62 4444xxxx</p></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Globalfooter