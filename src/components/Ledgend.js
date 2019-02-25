/* a component that displays a ledgend for IBM stock data */
import React  from 'react';

const Legend = () =>{
    const  scales = [120,130,140,150,160,170,180,200]; // scales used todesign the palette 
    const legendSymbols = scales.map((scale,index) =>{ // for each scale create a leged symbol, we get array of legend symbols
        return <div key={index+1}> <div className={`ledgend-symbol-${scale}`}></div><small>{scale}</small></div>
    });
    return <div className="ledgend">{legendSymbols}</div>; // wrapp the array of legend symbols and return them
}

export default Legend;