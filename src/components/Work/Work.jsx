import React, { useState } from 'react';
import { ListProjects } from './ListProjects/ListProjects';
import { ModalInfo } from './ModalInfo/ModalInfo';
import projects from '../../assets/sources';

const Work = ({ close }) => {
  const [displayInfo, changeDisplay] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const clearItems = () => {
    changeDisplay(false);
    setSelectedProject({});
  };

  const handleSelect = item => {
    try {
      const project = projects.filter(p => p.name === item);
      setSelectedProject(project[0]);
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
      <h2 className="major">Portfolio</h2>
      {displayInfo ? (
        <>
          <span
            className="icon fa-chevron-left back"
            onClick={goBack}
            role="presentation"
          />
          <ModalInfo project={selectedProject} />
        </>
      ) : (
        <ListProjects handleSelect={handleSelect} />
      )}

      <div
        className="close"
        onClick={handleClose}
        onKeyPress={handleClose}
        role="presentation"
      />
    </>
  );
};

export default Work;
