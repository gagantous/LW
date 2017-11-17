import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Globalnav from '../components/Globalnav'
import MainContent from './MainContent'
import Globalfooter from '../components/Globalfooter'
import '../scss/app'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Globalnav/>
          <MainContent/>
          <Globalfooter/>
        </div>
      </Router>
    )
  }
}

export default App