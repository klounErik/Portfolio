import React, {Component} from 'react'
import './Body.css'

export default class Body extends Component {
  render() {
    return (
      <div className="Body">
        <h1>About Me</h1>
        <hr />
        <article className="Aboutme">
          <span>
            <p>This is me, a man, or rather a man-child.</p>
            <p>
              For as long as i can remember i have been curious of the world around me. From trying to repair stuff(Wich
              ended up with me breaking them even more), to trying to understand how stuff works. It was back in 1998.
              Our very own first computer, running windows 98 with built-in games wich you had to run from DOS. This was
              the beginning of my passion for technology. I would spend several hours a day, exploring the operating
              system, messing around with the commando line to just making god-awful art in paint where you made lots of
              shapes and filling them with colour.
            </p>
            <p>
              A while later the era of the internet arrived. A place filled with information about everything.
              Essentially this was a goldmine for me. I could search for anything and i would get the information i
              needed. This lead to my search "How to program?". It turned out that this is something i love to do.
              Started out with some basic Hello World applications written in Java and C++. "THIS IS AWESOME! I type in
              something here and it comes back out!". So, my fate was sealed. I would move to Oslo to take an education
              in Information Technology. Here i met some of the most fantastic people on earth wich share my passion for
              technology, gaming and programming.
            </p>
            <hr />
            <span>
              <p>Keep on learning</p>
            </span>
          </span>
        </article>
      </div>
    )
  }
}
