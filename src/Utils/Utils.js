// this module contains functions that are required as callback by third aparty components I used

/* This is passed to react-calendar-heatmap component. it takes a value(stock price) and determines what color-scale 
class it should be assigned from the palatte */
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
  
  /* this is a callback passed to react-tooltip component. it takes a value and determines what tool tip message 
  to display*/
  const getToolTip = value => {
    if (!value.date) { // sometimes there is no stock data for a certain date. value will be {date:'', close: ''}
      return {
        'data-tip': 'no data',
      };
    } else {  // if there is value 
      return {
        'data-tip': `${value.date.toString().slice(0, 10)} closing price: ${value.close}`,
      };
    } 
  }
  
  export {generateClass, getToolTip};