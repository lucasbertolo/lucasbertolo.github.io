import React from 'react';
import pdf from '../../assets/resumo.pdf';

const Intro = ({ close }) => (
  <div>
    <h2 className="major">Resumo</h2>
    <embed src={pdf} type="application/pdf" />
    {close}
  </div>
);

export default Intro;
