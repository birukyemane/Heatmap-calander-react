import React  from 'react';

const Legend = () =>{
const  scales = [120,130,140,150,160,170,180,200];
const legendSymbols = scales.map((scale,index) =>{
    return <div key={index+1}> <div className={`ledgend-symbol-${scale}`}></div><small>{scale}</small></div>
})
return <div className="ledgend">{legendSymbols}</div>
}

export default Legend;