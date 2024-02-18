import React, { useState } from 'react'
import myContext from './Context'


function State({children}) {
   const [mode,setMode]=useState('light');

   const toggleMode =()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor="rgb(17,24,39)";
      }else{
        setMode('light');
        document.body.style.backgroundColor="white";
      }
   }

  return (
     <myContext.Provider value={{mode,toggleMode}}>
        {children}
     </myContext.Provider>
  )
}

export default State