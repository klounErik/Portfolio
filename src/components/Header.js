import React, {Component} from 'react'
import './Header.css'
import me from '../images/me.jpg'

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="Intro">
          <img src={me} className="App-logo" alt="logo" />
          <h1 id="Name">Jan Erik Egge</h1>
          <p id="Description">Dreamer - Laughing Man - Slightly OCD </p>
          <hr />
        </div>
      </header>
    )
  }
}
