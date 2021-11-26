import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

function UserRadar(props) {

  return (
    <div className='radar'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis tick={{ fill: 'white', fontSize: 12 }} dataKey='kind' />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

UserRadar.propTypes = {
  id: PropTypes.object.isRequired,
};

export default UserRadar;