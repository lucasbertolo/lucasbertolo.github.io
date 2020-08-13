import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';
import enums from '../../core/enums';
import { withBacklinks } from './withBacklinks';

export const InfoTools = ({ tools }) => {
  const { l } = useContext(CultureContext);
  return tools && tools.length > 0 ? (
    <section className="info-tools">
      <fieldset>
        <h4>{l('techs')}:</h4>
        <div className="chip-group">
          {tools.map(tool => {
            const Tag = ({ src, label }) => (
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                <div
                  className={`chip ${Object.keys(enums.tools).find(
                    s => s === tool,
                  )}`}
                >
                  <span className="tag">{enums.tools[tool]}</span>
                </div>
              </a>
            );
            const LinkedTag = withBacklinks(tool, Tag);
            return <LinkedTag key={tool} />;
          })}
        </div>
      </fieldset>
    </section>
  ) : null;
};
