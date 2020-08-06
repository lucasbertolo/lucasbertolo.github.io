import React from 'react';

export const InfoTools = ({ tools }) =>
  tools.length > 0 && (
    <section className="info-tools">
      <fieldset>
        <h4>Ferramentas:</h4>
        <div className="chip-group">
          {tools.map(tool => (
            <div className={`chip ${tool.replace('.', '')}`} key={tool}>
              <span className="tag">{tool}</span>
            </div>
          ))}
        </div>
      </fieldset>
    </section>
  );
