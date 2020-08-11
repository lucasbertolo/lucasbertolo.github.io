/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';
import { historyTree } from '../../core/sources';
import * as icons from './Icons';

export default function HistoryTree({ allowedHistory }) {
  const { l } = useContext(CultureContext);

  const entries = historyTree.sort((a, b) => a.year - b.year);
  const filteredEntries = entries.slice(0, allowedHistory);

  const defineSource = source => {
    switch (source.toLowerCase()) {
      case 'vivo':
        return icons.VivoIcon();
      case 'ise':
        return icons.IseIcon();
      case 'gatec':
        return icons.GatecIcon();
      case 'freelancer':
        return icons.FreelancerIcon();
      case 'orange t.i.':
        return icons.OrangeIcon();
      case 'iplace':
        return icons.IplaceIcon();
      case 'ifsp':
        return icons.IfspIcon();
      default:
        return null;
    }
  };
  return (
    <div className="schedule-container">
      <ul className="main">
        <h3 className="lbl-title">Historico</h3>
        {filteredEntries.map((item, idx) => {
          return (
            <div key={`${item.local}+${idx}`}>
              <li className="date">
                <h3>{item.year}</h3>
              </li>
              <li className="events">
                <ul className="events-detail">
                  {item.jobs.map(job => (
                    <li key={job.local} className="fadeIn">
                      <div className="event-info">
                        {defineSource(job.local)}
                        <div className="job-description">
                          <h3>{job.local}</h3>
                          <h5>{l(job.function)}</h5>
                        </div>
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
