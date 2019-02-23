import React, { Component } from 'react';
import './App.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import stockData from './assets/data'

class App extends Component {
  state = {
    data: stockData,
    startDate: new Date('2017-01-01'),
    endDate: new Date('2017-12-31')
    
  }
  render() {
  
    return (
     <div className="main-wrapper">
       <header>Heatmap caledar</header>
       <div className="heatmap">
         <CalendarHeatmap
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            values={this.state.data}
            classForValue={generateClass}
          />
       </div>
       <footer>copyright@neuroeventLabs</footer>
     </div>
    );
  }
}

export default App;

const generateClass = (value) => {
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