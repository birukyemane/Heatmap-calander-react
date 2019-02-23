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
         <h3>heatmap clarendar demo</h3>
         <CalendarHeatmap
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            values={this.state.data}
          />
       </div>
       <footer>copyright@neuroeventLabs</footer>
     </div>
    );
  }
}

export default App;