import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getUserAverageDuration } from '../../data/dataManager';
import PropTypes from 'prop-types';

function AverageDuration(props) {
  const data = getUserAverageDuration(props.id);

  return (
    <div className='averageDuration'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageDuration.propTypes = {
  id: PropTypes.number.isRequired,
};


export default AverageDuration;