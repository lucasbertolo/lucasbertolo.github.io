import React from 'react';

const tree = [
  {
    year: 2010,
    jobs: [
      {
        local: 'Vivo',
        function: 'consultant',
      },
    ],
  },
  {
    year: 2012,
    jobs: [
      {
        local: 'iPlace',
        function: 'consultant',
      },
    ],
  },
  {
    year: 2015,
    jobs: [
      {
        local: 'Orange T.I.',
        function: 'assistant',
      },
    ],
  },
  {
    year: 2017,
    jobs: [
      {
        local: 'ISE',
        function: 'graduation',
      },
    ],
  },
  {
    year: 2019,
    jobs: [
      {
        local: 'Gatec',
        function: 'dev',
      },
      {
        local: 'IFSP',
        function: 'graduation',
      },
    ],
  },
];

export default function HistoryTree() {
  const entries = tree.sort((a, b) => a.year - b.year);

  return (
    <div className="schedule-container">
      <ul className="main">
        <h3 className="lbl-title">Historico</h3>
        {entries.map(item => {
          return (
            <div key={item.local}>
              <li className="date">
                <h3>{item.year}</h3>
              </li>
              <li className="events">
                <ul className="events-detail">
                  {item.jobs.map(job => (
                    <li key={job.local}>
                      <div className="event-info">
                        <span className="event-time">{job.local} - </span>
                        <span className="event-name">
                          <span className="lbl-name"> {job.function} </span>
                        </span>
                        <br />
                        {/* <span className="event-location">
                                <span className="lbl-property"> </span> {item.function}
                              </span> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
