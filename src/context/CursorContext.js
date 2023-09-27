import React, {useState, useEffect , createContext } from 'react';

 export const CursorContext = createContext();


const CursorProvider = ({children}) => {
  const [cursorPos, setCursorPos] = useState({
    x:0,
    y:0,
  



  });

  const [cursorBG, setCursorBG]= useState('default');

  const move =(e)=>{
    setCursorPos({
      x: e.clientX,
      y: e.clientY
    });
  }
 

 

  useEffect(()=>{
    window.addEventListener('mousemove',move);

    return ()=> { 
      window.removeEventListener('mousemove',move)
    };
    

  });
 
  const cursorVarients ={
    default : {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor : '#0e1112'
    },
    text:{

      width : '80px',
      height : '80px',
    
      x:cursorPos.x - 72,
      y:cursorPos.y - 72,
      backgroundColor:'#fff',
      mixBlendMode: 'difference',
      

    },
  };
 
  
const mouseEnterHandler = ()=> {
  setCursorBG('text');
}
  
const mouseLeaveHandler = ()=> {
  setCursorBG('default')
}

  return ( <CursorContext.Provider value={{cursorVarients,cursorBG,mouseEnterHandler,mouseLeaveHandler}}>
    {children}

  </CursorContext.Provider>
  );
};

export default CursorProvider;
