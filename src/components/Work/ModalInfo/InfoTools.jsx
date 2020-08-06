import React from 'react';
import enums from '../../../core/enums';

export const InfoTools = ({ tools }) =>
  tools.length > 0 && (
    <section className="info-tools">
      <fieldset>
        <h4>Ferramentas:</h4>
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
  );
