import React, { useReducer } from 'react';
import { Fields } from './Fields/Fields';
import { Actions } from './Actions/Actions';
import { Social } from './Social/Social';

const Contact = ({ close }) => {
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

  const onSubmit = () => {
    if (email.length === 0 || name.length === 0 || message.length === 0) {
      setStatus('Campo(s) vazio');
    } else {
      setStatus('Enviando...');

      fetch('https://dry-island-26655.herokuapp.com/contactLucasBertolo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message, name }),
      })
        .then(response => response.json())
        .then(res => {
          if (res.status === 200) {
            setStatus('Enviada com sucesso!!');
          } else {
            setStatus('Algo deu errado, tente novamente mais tarde');
          }
          clearValues();
        })
        .catch(() => {
          setStatus('Algo deu errado, tente novamente mais tarde');
        });
    }
  };

  return (
    <section>
      <h2 className="major">Contato</h2>
      <div className="form">
        <Fields
          setValues={setValues}
          name={name}
          email={email}
          message={message}
        />
        <Actions onSubmit={onSubmit} resetInput={clearValues} status={status} />
      </div>
      <Social />
      {close}
    </section>
  );
};

export default Contact;
