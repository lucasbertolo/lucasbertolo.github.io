import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

export const Actions = ({ onSubmit, resetInput, status }) => {
  const { l } = useContext(CultureContext);

  return (
    <ul className="actions">
      <li>
        <input
          type="submit"
          value={l('sendMessage')}
          className="special"
          onClick={onSubmit}
        />
      </li>
      <li>
        <input type="reset" value={l('clear')} onClick={resetInput} />
      </li>
      <li id="status-message">
        <h3>{status}</h3>
      </li>
    </ul>
  );
};
