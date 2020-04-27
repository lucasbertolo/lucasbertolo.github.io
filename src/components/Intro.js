import React from 'react';
import pdf from '../assets/resumo.pdf';

const Intro = (props) => (
	<div>
		<h2 className="major">Resumo</h2>
	    <embed src={pdf} type='application/pdf' />
        {props.close}
    </div>
)

export default Intro;