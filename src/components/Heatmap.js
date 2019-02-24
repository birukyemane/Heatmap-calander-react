import React  from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import Slider from './Slider';
import {generateClass, getToolTip} from '../Utils/Utils';
import Legend from './Ledgend';

const Heatmap = (props) =>{
    const {prevYear, nextYear} = props;
    const {data, currentYear} = props.state;
    return (
        <div className="heatmap">
        <Slider year={currentYear} prev={prevYear} next={nextYear}/>
        <CalendarHeatmap
          startDate={`${Number(currentYear)-1}-12-31`}
          endDate={`${currentYear}-12-31`}
          values={data}
          classForValue={generateClass}
          showWeekdayLabels={true}
          tooltipDataAttrs={getToolTip}
        />
        <div className="ledgend-wrapper"> <Legend /></div>         
        <ReactTooltip />
        </div>
    );
}

export default Heatmap;