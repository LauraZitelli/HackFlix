import React from 'react';

export default function FormField({ type, value, name, onChange}){
  return(
    <div>
      <label>
        {`${name}:`} 
        <input 
          type={type}
          value={value.nome}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}



