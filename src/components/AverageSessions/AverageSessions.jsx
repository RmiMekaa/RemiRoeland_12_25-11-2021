import React from 'react';
import { LineChart, Line, Tooltip, Legend, XAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

function AverageSessions(props) {

  return (
    <div className='averageSessions'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={730} height={250} data={props.data}>
          <Tooltip />
          <Line dot={false} legendType="none" type="monotone" dataKey="sessionLength" stroke="blue" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessions.propTypes = {
  id: PropTypes.object.isRequired,
};

export default AverageSessions;