import React from 'react';
import './Experience.css';
import content from '../../content';

function Experience() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="xl-font">Experience</h1>
        </div>
      </div>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="row">
            {
              content.experience.skills.map( ( url, i ) => {
                return (
                  <div key={ i } className="col-md-3">
                    <div className="skill" style={{ backgroundImage: `url( ${ url } )` }}></div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;