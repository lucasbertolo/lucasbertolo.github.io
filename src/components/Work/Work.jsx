import React from 'react';
import projects from '../../assets/sources';

const Work = ({ close }) => (
  <div>
    <h2 className="major">Portfolio</h2>
    <div className="container-portfolio">
      {projects.map(project => (
        <div
          className="zone"
          id={project.name}
          style={{ backgroundImage: `url(${project.image})` }}
          key={project.name}
        >
          <span className="background-hover">
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </p>
          </span>
        </div>
      ))}
    </div>
    {close}
  </div>
);

export default Work;
