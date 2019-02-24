import React, { Component } from 'react';
import './App.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import stockData from './assets/data';
import Legend from './components/Ledgend';
import Slider from './components/Slider'
import {generateClass, getToolTip} from './Utils/Utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faForward } from '@fortawesome/free-solid-svg-icons'; 
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 

library.add(faForward, faBackward);

class App extends Component {
  state = {
    data: stockData,
    currentYear : '2016'      
  }

  nextYear = () => {
    if(this.state.currentYear < 2019) this.setState({currentYear:Number(this.state.currentYear) + 1})
    console.log('currnt year', this.state.currentYear)
  };

  prevYear = () => {
    if(this.state.currentYear > 2015) this.setState({currentYear:Number(this.state.currentYear) - 1})
  }

  render() {  
    return (
     <div className="main-wrapper">
       <header>
         <h1>Heatmap calendar</h1>
         </header>
       <div className="heatmap">
        <article>
          <h2>IBM - 57 Year Stock Price History</h2>
          <p>Historical daily share price data for IBM since 1962 based on closing data. You can find further info
            about the data from <a href="https://www.macrotrends.net/stocks/charts/IBM/ibm/stock-price-history">here</a>.
          </p>
        </article>       
          <Slider year={this.state.currentYear} prev={this.prevYear} next={this.nextYear}/>
          <CalendarHeatmap
            startDate={`${Number(this.state.currentYear)-1}-12-31`}
            endDate={`${this.state.currentYear}-12-31`}
            values={this.state.data}
            classForValue={generateClass}
            showWeekdayLabels={true}
            tooltipDataAttrs={getToolTip}
          />
          <Legend />
          <ReactTooltip />
       </div>
       <footer>copyright@neuroeventLabs</footer>
     </div>
    );
  }
}

export default App;
