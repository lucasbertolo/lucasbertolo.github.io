/* eslint-disable no-use-before-define */
import React from 'react';
import enums from '../../core/enums';

export const Skills = () => (
  <>
    <h3>Habilidades</h3>
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
                        <p>{`${item.years} ano${item.years > 1 ? 's' : ''}`}</p>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <h3>Outras:</h3>
    <p>
      Sass, PWA, Git
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
