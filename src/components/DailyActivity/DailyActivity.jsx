import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

function DailyActivity(props) {

  return (
    <div className='dailyActivity'>
      <BarChart barGap={7} width={730} height={250} data={props.data} >
        <Legend className='dailyActivity__legend' align="right" verticalAlign="top" iconType="circle" iconSize={9} />
        <CartesianGrid strokeDasharray="2 3" vertical={false} />
        <Tooltip />
        <XAxis tickSize={0} dataKey={"index"} tickMargin={16} />
        <YAxis hide={true} tickSize={0} orientation="right" />
        <Bar name="poids (kg)" barSize={7} radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#282D30" />
        <Bar name="Calories brûlées (kCal)" barSize={7} radius={[10, 10, 0, 0]} dataKey="calories" fill="#E60000" />
      </BarChart>
    </div>
  );
}

DailyActivity.propTypes = {
  id: PropTypes.object.isRequired,
};


export default DailyActivity;