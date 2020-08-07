import emailjs from 'emailjs-com';
import React, { useContext, useReducer } from 'react';
import { CultureContext } from '../../core/resources';
import { Actions } from './Actions';
import { Fields } from './Fields';
import { Social } from './Social';

const Contact = ({ close }) => {
  const { l } = useContext(CultureContext);

  const INITIAL_STATE = {
    name: '',
    message: '',
    email: '',
    status: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_VALUES':
        return { ...state, [action.payload.name]: action.payload.value };
      case 'SET_STATUS':
        return { ...state, status: action.payload };
      case 'CLEAR_VALUES':
        return { ...state, name: '', message: '', email: '' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setStatus = msg => dispatch({ type: 'SET_STATUS', payload: msg });

  const setValues = (name, e) => {
    dispatch({
      type: 'SET_VALUES',
      payload: { name, value: e.target.value },
    });
  };

  const clearValues = () => dispatch({ type: 'CLEAR_VALUES' });

  const { name, message, email, status } = state;

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send('gmail', templateId, variables, process.env.USER_ID)
      .then(res => {
        if (res.status === 200) {
          setStatus(l('sentEmail'));
          clearValues();
        } else setStatus(l('tryAgain'));
      })
      .catch(() => setStatus(l('tryAgain')));
  };

  const handleSubmit = () => {
    if (email.length === 0 || name.length === 0 || message.length === 0) {
      setStatus(l('emptyFields'));
      return;
    }

    setStatus(l('sending'));
    const templateId = 'template_D0l322F4';

    sendFeedback(templateId, {
      message_html: message,
      name,
      email,
    });
  };

  return (
    <section>
      <h2 className="major">{l('contact')}</h2>
      <div className="form">
        <Fields
          setValues={setValues}
          name={name}
          email={email}
          message={message}
        />
        <Actions
          onSubmit={handleSubmit}
          resetInput={clearValues}
          status={status}
        />
      </div>
      <Social />
      {close}
    </section>
  );
};

export default Contact;
