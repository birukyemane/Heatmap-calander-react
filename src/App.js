// this is the main App component. 

import React, { Component } from 'react';
import './App.css';  // CSS for the app is stored here. I prefer to use one CSS file usually. but if application is big separate css files for each component
import stockData from './assets/data'; // a json file that stores stock price data for IBM(2015-2019). 
import Heatmap from './components/Heatmap'; // a component that renders the heat map
import Footer from './components/Footer';
import Header from './components/Header';
// import fontawsome icons and add them to library 
import { library } from '@fortawesome/fontawesome-svg-core';  
import { faForward } from '@fortawesome/free-solid-svg-icons'; 
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 

library.add(faForward, faBackward);  

class App extends Component {
  state = {              // the app's state or data model
    data: stockData,     // stock data we gonna dispaly with heatmap
    currentYear : 2015  // year which is being displayed currently in the heatmap, initialized to the latest year
  }

  nextYear = () => {  // increament currentYear when user clicks next 
    if(this.state.currentYear < 2019) this.setState({currentYear:this.state.currentYear + 1})
  };

  prevYear = () => {  // decreament currentYear when user clicks previous
    if(this.state.currentYear > 2015) this.setState({currentYear:this.state.currentYear - 1})
  }

  render() {   // renders the UI for the application. There are Header, content and Footer 
    return (
     <div className="App">
        <Header />
        <div className="content">
          <article className="introText">   {/* article can be taken out as separate component if needed */}
            <h3 className="title">IBM - 5 Year Stock Price History</h3>
            <p>You can find further info
              about the data from <a href="https://www.macrotrends.net/stocks/charts/IBM/ibm/stock-price-history">here</a>.
            </p>
          </article>     
          {/* we pass the state(data), currentYear and prevYear functions to the Heatmap component*/}  
          <Heatmap state = {this.state} prevYear={this.prevYear} nextYear={this.nextYear} /> 
        </div>       
        <Footer />
      </div>
    );
  }
}

export default App;
