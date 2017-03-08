import React from 'react';

const Content = () => (
  <div className="app-content">
    <div className="aboutme">
      <h2>About me</h2>
      <p>I've worked on CNC lasers & robots; studied medicine, law, & engineering; and served in the U.S. Navy & Afghanistan.</p>
      <p>A programming in C course would change the direction of my life though. I really enjoyed the problem solving aspect of writing code. I loved the many ways to write the same program and trying to find the way to do it in the least amount of code.</p>
      <p>So here I am self-taught and still learning a million new things a day!</p>
      <p>When I'm not coding you can find me walking my dog, enjoying a microbrew, and Rock Chalkin' all day everyday!</p>
      <p className='note'>NOTE: I am not looking for anything revolving around design...I imagine that is clear from this website.</p>
    </div>
    <div className="tech-pipe">
      <div className="tech">
        <h2>My bag of tricks</h2>
        <ul className='tech-list'>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>Git/GitHub</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>React.js</li>
          <li>Redux.js</li>
        </ul>
      </div>
      <div className="pipeline">
        <h2>Pipeline</h2>
        <div className="lists">
          <ul className='pipe-tech-list'>
            <h4 className='list-heading'>Technology</h4>
            <li>GraphQL</li>
            <li>Next.js</li>
            <li>Elixir</li>
            <li>React-Native</li>
            <li>Python</li>
            <li>Electron</li>
          </ul>
          <ul className='pipe-project-list'>
            <h4 className='list-heading'>Projects</h4>
            <li>Deploy first PWA for production</li>
            <li>Electon App: Simple Todo</li>
            <li>Open Source: Cloudinary Widget React Component</li>
            <li>Add blog feature to this website.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
