import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';
import enums from '../../core/enums';

export const InfoTools = ({ tools }) => {
  const { l } = useContext(CultureContext);
  return tools && tools.length > 0 ? (
    <section className="info-tools">
      <fieldset>
        <h4>{l('tools')}:</h4>
        <div className="chip-group">
          {tools.map(tool => (
            <div
              className={`chip ${Object.keys(enums.tools).find(
                s => s === tool,
              )}`}
              key={tool}
            >
              <span className="tag">{enums.tools[tool]}</span>
            </div>
          ))}
        </div>
      </fieldset>
    </section>
  ) : null;
};
