/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useStorage } from '../store/storage'


function Button() {
  const [value, setValue] = useState(0);
  const {setAmbientLight} = useStorage();

  const change = () =>{
    const preset = ["apartment","city","dawn","forest","lobby","night","park","studio","sunset","warehouse"];
    if(value + 1 > preset.length -1){
      setValue(1);
    }else{
      setValue((prev)=>prev+1);
    }
    setAmbientLight(preset[value])
    console.log(preset.length)
  }
  return (
    <button className='action-button' onClick={change}>Trocar iluminação</button>
  )
}

export default Button
