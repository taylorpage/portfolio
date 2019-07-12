import React from 'react';
import './SideNav.css';
import content from '../../content';
import { SocialIcon } from 'react-social-icons';

function SideNav() {
  return (
    <ul className="btn-list">
      {
        content.sideNav.map( ( btn, i ) => {
          return (
            <li>
              <a className="side-btn" href={ btn.link } target="_blank" rel="noopener noreferrer">
                <SocialIcon network={ btn.network }></SocialIcon>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default SideNav;