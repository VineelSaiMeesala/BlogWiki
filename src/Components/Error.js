import React from 'react';

const Errorcon = (prop1,prop2) => {
    let widht = window.innerWidth;
    console.log(widht)
    if(widht > 375){
        console.log('Desktop')
        return(
            prop1
        )
        
    }
    else{
        console.log('Mobile')
        return(
            prop2
        )
    }
  
};

export default Errorcon;