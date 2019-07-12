import React from 'react';
import './Roles.css';
import content from '../../content';

function Roles() {
  return (
    <div className="layer">
      <div className="container">
        <div className="row">
          {
            content.roles.skills.map( ( skill, i ) => {
              return (
                <div className="col" key={ i }>
                  <div className="skill-image" style={{ backgroundImage: `url(${skill.image })` }}></div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{ skill.title }</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="roles">
        <div className="opacity-layer"></div>
      </div>
    </div>
  );
}

export default Roles;