import React from 'react';
import './Experience.css';
import content from '../../content';

function Experience() {
  return (
    <div className="container experience">
      <div className="row">
        <div className="col">
          <h1 className="xl-font">Experience</h1>
        </div>
      </div>

      {
        content.experience.jobs.map( ( job, i ) => {
          return (
            <div className="row">
              <div className="col job">
                <div className="media">
                  <img src={ job.logo } className="mr-3 logo" alt={ `${ job.company} logo` } />
                  <div className="media-body text-left">
                    <h5 className="mt-0">{ job.company }</h5>
                    <h6>{ job.position }</h6>
                    { job.text }
                  </div>
                  {
                    job.preview && 
                    <img src={ job.preview } className="mr-3 preview" alt={ `${ job.company} preview` } />
                  }
                </div>
              </div>
            </div>
          );
        })

      }
        {/* <div className="col">
          Web Technologies
        </div>
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
        </div> */}
    </div>
  );
}

export default Experience;