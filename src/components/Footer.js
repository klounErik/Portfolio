import React, {Component} from 'react'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Contact">
          <a href="https://github.com/klounErik">
            <img id="Github" height="50" src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/jan-erik-egge-44aa67106">
            <img id="Linkedin" height="50" src={Linkedin} alt="Github" />
          </a>
        </div>
      </div>
    )
  }
}
