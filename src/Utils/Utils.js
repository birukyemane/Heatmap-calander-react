// this module contains functions that are used as callback in components

const generateClass = value => {
    if (!value) {
      return 'color-empty';
    } else if(value.close < 120){
      return 'color-scale-120';
    } else if(value.close < 130){
      return 'color-scale-130';
    } else if(value.close < 140){
      return 'color-scale-140';
    } else if(value.close < 150){
      return 'color-scale-150';
    } else if(value.close < 160){
      return 'color-scale-160';
    } else if(value.close < 170){
      return 'color-scale-170';
    } else if(value.close < 180){
      return 'color-scale-180';
    }else if(value.close < 200){
      return 'color-scale-200';
    }
  }
  
  const getToolTip = value => {
    if (!value.date) {
      console.log('no value')
      return {
        'data-tip': 'no data',
      };
    } else {
      console.log('error in value ', value)
      return {
        'data-tip': `${value.date.toString().slice(0, 10)} closing price: ${value.close}`,
      };
    } 
  }
  
  export {generateClass, getToolTip};