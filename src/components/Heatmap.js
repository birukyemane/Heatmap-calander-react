/* Heatmap component I built on top of react-calendar-heatmap component (pease visit https://www.npmjs.com/package/react-cal-heatmap for more info)
  It displays Slider, heatmap and ledgned. In additon to the react-calendar-heatmap component it uses the
   Slider and Ledgned components I built. it displays a heat map for the current year, i.e what user selected. current year means 
   what the user selected in the app. user can also select different year using the slider. */
   
import React  from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import Slider from './Slider'; // it needs the Slider component
import {generateClass, getToolTip} from '../Utils/Utils'; // import callback functions needed
import Legend from './Ledgend'; // it needs Ledgend component

const Heatmap = (props) =>{  
  // destructure props to get the prevYear, nextYear, data and year passed as parameters 
  const {prevYear, nextYear} = props; 
  const {data, currentYear} = props.state;
  return (
    <div className="heatmap">
      <Slider year={currentYear} prev={prevYear} next={nextYear}/> {/* pass the current year(selected) and functions to Slider*/}
      <CalendarHeatmap
        startDate={`${currentYear-1}-12-31`} // startDate is exclusive. so to start from the beginning of current year startDate must be the last day of previous year.
        endDate={`${currentYear}-12-31`} // the end date for current year
        values={data} // the data to be displayed on heatmap. we pass the 'data' variable  
        classForValue={generateClass} // callback to be used to determine the palette color for a value
        showWeekdayLabels={true} 
        tooltipDataAttrs={getToolTip} // callback to be used to determine tooltip messag for a value
      />
      <div className="ledgend-wrapper"> <Legend /></div> {/* add ledgned, its static no arguments to pass */}    
      <ReactTooltip /> {/*we need this component. can be planced anywhere*/}
    </div>
  );
}

export default Heatmap;