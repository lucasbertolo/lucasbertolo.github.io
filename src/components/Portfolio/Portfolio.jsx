import React, { useContext, useState } from 'react';
import { CultureContext } from '../../core/resources';
import { projects } from '../../core/sources';
import { ListProjects } from './ListProjects';
import { ModalInfo } from './ModalInfo';

const Portfolio = ({ close }) => {
  const { l } = useContext(CultureContext);

  const [displayInfo, changeDisplay] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const clearItems = () => {
    changeDisplay(false);
    setSelectedProject({});
  };

  const handleSelect = item => {
    try {
      const project = projects.find(p => p.name === item);
      setSelectedProject(project);
      changeDisplay(true);
    } catch (err) {
      clearItems();
    }
  };

  const goBack = () => {
    clearItems();
  };

  const handleClose = () => {
    close();
    setTimeout(() => clearItems(), 300);
  };

  return (
    <>
      {displayInfo ? (
        <>
          <ModalInfo project={selectedProject} />
          <div
            className="goback"
            onClick={goBack}
            onKeyPress={goBack}
            role="presentation"
          />
        </>
      ) : (
        <>
          <h2 className="major">{l('portfolio')}</h2>

          <ListProjects handleSelect={handleSelect} />
          <div
            className="close"
            onClick={handleClose}
            onKeyPress={handleClose}
            role="presentation"
          />
        </>
      )}
    </>
  );
};

export default Portfolio;
