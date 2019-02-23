import React, { Component } from 'react';
import './App.css';
import CalendarHeatmap from 'react-calendar-heatmap';

class App extends Component {
  render() {
  
    return (
     <div className="main-wrapper">
       <header>Heatmap caledar</header>
       <div className="heatmap">
         <h3>heatmap clarendar demo</h3>
         <CalendarHeatmap
            startDate={new Date('2016-01-01')}
            endDate={new Date('2016-04-01')}
            values={[
              { date: '2016-01-01' },
              { date: '2016-01-22' },
              { date: '2016-01-30' },
              // ...and so on
            ]}
          />
       </div>
       <footer>copyright@neuroeventLabs</footer>
     </div>
    );
  }
}

export default App;