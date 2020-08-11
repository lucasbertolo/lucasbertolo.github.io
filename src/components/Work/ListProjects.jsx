import React from 'react';
import { projects } from '../../core/sources';

export const ListProjects = ({ handleSelect }) => (
  <div className="container-portfolio fadeIn">
    {projects.map(project => (
      <nav
        className="zone"
        id={project.name}
        onClick={() => handleSelect(project.name)}
        role="presentation"
        key={project.name}
      >
        <div
          className="project-image"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <span className="cover">
          <p>{project.name}</p>
        </span>
      </nav>
    ))}
  </div>
);
