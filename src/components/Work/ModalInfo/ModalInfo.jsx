import React from 'react';

export const ModalInfo = ({ project }) => {
  return (
    <div className="modal-info">
      <h3>Projeto: {project.name}</h3>

      <h3>Descrição: {project.description}</h3>

      <h3>Ferramentas utilizadas: {project.tools} </h3>

      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <button type="button">Ir para o site</button>
      </a>
    </div>
  );
};
