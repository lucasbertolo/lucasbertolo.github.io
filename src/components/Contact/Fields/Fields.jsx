import React from 'react';

export const Fields = ({ name, message, email, setValues }) => (
  <>
    <div className="field half first">
      <label htmlFor="name">
        Nome
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
        Email
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
        Mensagem
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
