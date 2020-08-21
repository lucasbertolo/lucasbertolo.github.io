/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
import enums from '../../core/enums';
import { CultureContext } from '../../core/resources';

export const Skills = () => {
  const { l } = useContext(CultureContext);
  return (
    <>
      <h3>{l('skills')}</h3>
      <div id="skillspane">
        <div id="skillchart">
          <table>
            <tbody>
              {exp
                .sort((a, b) => b.years - a.years)
                .map(item => (
                  <React.Fragment key={item.name}>
                    <tr>
                      <td>{enums.tools[item.name]}</td>
                      <td>
                        <div
                          className={`xpbar ${Object.keys(enums.tools).find(
                            s => s === item.name,
                          )}`}
                          style={{ width: `${(item.years / 3) * 100}%` }}
                        >
                          <p>
                            {`${item.years} ${l('year')}${
                              item.years > 1 ? 's' : ''
                            }`}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <span className="skills-legend">
        <p>{`*${l('exp')}`}</p>
      </span>
      <h3>{l('others')}:</h3>
      <p>
        Sass, PWA, Git, Webpack
        <br />
        Redux, Next.js, Gatsby.js, GraphQl
        <br />
        Node, Express.js
        <br />
        PostgreSQL, MySQL, Realm
        <br />
        Linq, .NET
        <br />
      </p>
    </>
  );
};

const exp = [
  {
    name: 'javascript',
    years: 3,
  },
  {
    name: 'react',
    years: 2,
  },
  {
    name: 'native',
    years: 1,
  },
  {
    name: 'csharp',
    years: 1,
  },
  {
    name: 'sql',
    years: 2,
  },
];
