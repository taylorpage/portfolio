import React from 'react';
import './About.css';
import content from '../../content';

function About() {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col">
          <h1>About</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          This is supposed to be lorem ipsum hey hey ho ho the man in power has got to go!
        </div>
        <div className="col-lg-4">
          <img className="profile" src={ content.about.profilePic }></img>
        </div>
      </div>
    </div>
  );
}

export default About;