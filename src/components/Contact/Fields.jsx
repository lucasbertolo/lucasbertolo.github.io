import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';

export const Fields = ({ name, message, email, setValues }) => {
  const { l } = useContext(CultureContext);

  return (
    <>
      <div className="field half first">
        <label htmlFor="name">
          {l('name')}
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={res => setValues('name', res)}
          />
        </label>
      </div>
      <div className="field half">
        <label htmlFor="email">
          {l('email')}
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={res => setValues('email', res)}
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="message">
          {l('message')}
          <textarea
            type="text"
            name="message"
            id="message"
            rows="4"
            value={message}
            onChange={res => setValues('message', res)}
          />
        </label>
      </div>
    </>
  );
};
