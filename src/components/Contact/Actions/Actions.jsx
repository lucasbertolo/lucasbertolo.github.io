import React from 'react';

export const Actions = ({ onSubmit, resetInput, status }) => (
  <ul className="actions">
    <li>
      <input
        type="submit"
        value="Enviar Mensagem"
        className="special"
        onClick={onSubmit}
      />
    </li>
    <li>
      <input type="reset" value="Limpar" onClick={resetInput} />
    </li>
    <li id="status-message">
      <h3>{status}</h3>
    </li>
  </ul>
);
