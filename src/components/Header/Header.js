import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import content from '../../content';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="opacity-layer"></div>
        <Nav></Nav>
        <div className="container">
          <div className="row header-content">
            <div className="col text-left">
              <h1 className="xl-font title">{ content.header.title }</h1>
              <p className="intro">{ content.header.intro }</p>
              <button className="btn btn-primary">Submit Challenge</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
