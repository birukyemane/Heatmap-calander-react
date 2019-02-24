import React, { Component } from 'react';
import './App.css';
import stockData from './assets/data';
import Heatmap from './components/Heatmap';
import Footer from './components/Footer';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faForward } from '@fortawesome/free-solid-svg-icons'; 
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 

library.add(faForward, faBackward);

class App extends Component {
  state = {
    data: stockData,
    currentYear : '2019'      
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
     <div className="App">
        <Header />
        <div className="content">
          <article className="introText">
            <h2 className="title">IBM - 5 Year Stock Price History</h2>
            <p>Historical daily share closing price data for IBM since 2015. You can find further info
              about the data from <a href="https://www.macrotrends.net/stocks/charts/IBM/ibm/stock-price-history">here</a>.
            </p>
          </article>       
          <Heatmap state = {this.state} prevYear={this.prevYear} nextYear={this.nextYear} />
        </div>       
        <Footer />
      </div>
    );
  }
}

export default App;
