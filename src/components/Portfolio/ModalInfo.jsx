import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';
import { InfoAction } from './InfoAction';
import { InfoDescription } from './InfoDescription';
import { InfoImage } from './InfoImage';
import { InfoVideo } from './InfoVideo';
import { InfoTools } from './InfoTools';
import { InfoScore } from './InfoScore';

export const ModalInfo = ({ project }) => {
  const { culture } = useContext(CultureContext);

  return (
    <div className="modal-info fadeIn">
      {!!project.video && (
        <InfoVideo src={project.video} label={project.name} />
      )}
      {!!project.headerImg && (
        <InfoImage src={project.headerImg} label={project.name} />
      )}
      <InfoDescription
        name={project.name}
        description={project.description ? project.description[culture] : ''}
      />
      {!!project.score && <InfoScore src={project.score} />}
      <InfoTools tools={project.tools} />
      <InfoAction link={project.link} github={project.github} />
    </div>
  );
};
