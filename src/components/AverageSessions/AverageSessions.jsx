import React from 'react';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

function AverageSessions(props) {

  // Format days from numbers to initials
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  props.data.map((item, i) => (item.day = days[i]))

  return (
    <div className='averageSessions'>
      <h2 className='averageSessions__heading'>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={props.data} margin={{ top: 70, bottom: 10, left: 20, right: 20 }}>
          <Tooltip
            content={<CustomToolTipContent />}
            cursor={<CustomCursor />}
            contentStyle={{ border: 'none', background: 'white', }}
            itemStyle={{ color: 'blue' }}
          />
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="white" tickMargin={10} tick={{ fontSize: 12, opacity: 0.7 }} />
          <Line dot={false} legendType="none" type="monotone" dataKey="sessionLength" stroke="white" strokeWidth="1.5" />
        </LineChart>
      </ResponsiveContainer>
    </div >
  );
}

/**
 * Custom tooltip content
 * @param {object}    payload   data
 * @param {boolean}   active    true if tooltip is displayed
 */
const CustomToolTipContent = ({ payload, active }) => {
  if (active) {
    return (
      <div className="tooltip">
        <p className="tooltip__text">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}

/**
 * Custom cursor
 * @param {array} points coordinates 
 */
const CustomCursor = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y="0"
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    ></rect>
  )
}

AverageSessions.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AverageSessions;