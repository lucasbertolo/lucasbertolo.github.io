import React from 'react';
import { InfoTools } from './InfoTools';
import { InfoImage } from './InfoImage';
import { InfoAction } from './InfoAction';
import { InfoDescription } from './InfoDescription';

export const ModalInfo = ({ project }) => {
  return (
    <div className="modal-info fadeIn">
      <InfoImage />
      <InfoDescription name={project.name} description={project.description} />
      <InfoTools tools={project.tools || []} />
      <InfoAction link={project.link} github={project.github} />
    </div>
  );
};
