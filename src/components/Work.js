import React from 'react';
import projects from '../assets/sources';

const Work = (props) => (
	<div> 	
		<h2 className="major">Portfolio</h2>
        <div className="container-portfolio">  
	        {
	        	projects.map((project) => {
			      return(
			           <div className="zone" id={project.name} style={{backgroundImage: `url(${project.image})`}} key={project.name}>
			              <span className="background-hover">
			                <p><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></p>
			              </span>
			            </div>
			        )
			    })
	        }
        </div>
        {props.close}

    </div>    
);

export default Work;
