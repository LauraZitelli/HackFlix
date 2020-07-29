import React from 'react';

export default function ButtonLink(props) {
  //props => { className="O que alguém passar" }
  //props é um objeto

  //console.log(props)
  return(
    <a className={props.className}  href={props.href}> 
      {props.children} 
    </a>
  );
}