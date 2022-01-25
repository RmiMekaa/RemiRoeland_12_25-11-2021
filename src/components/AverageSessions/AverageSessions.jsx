import React, { useEffect, useState } from 'react';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { getData } from '../../data/dataManager';
import { displayComponentStatus } from "../../services/DisplayComponentStatus";

/**
 * React Component for User Average Sessions (Chart: LineChart)
 * @param {Object} props 
 * @param {Number} props.id  User Id
 * @component
 */
function AverageSessions(props) {
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(props.id, "averageSessions")
      .then(res => {
        setUserAverageSessions(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        console.error(err);
        setError(true)
        setLoadingStatus(false)
      })
  }, [props.id])

  if (isLoading || error) {
    return (
      <div className='averageSessions'>
        {displayComponentStatus(isLoading, error, "Sessions")}
      </div>
    )
  }

  return (
    <div className='averageSessions'>
      <h2 className='averageSessions__heading'>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userAverageSessions} margin={{ top: 70, bottom: 10, left: 20, right: 20 }}>
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
 * Custom tooltip content for line chart
 * @param {Object}    payload   data
 * @param {Boolean}   active    true if tooltip is displayed
 * @component
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
 * Custom cursor for line chart
 * @param   {Object}  points  coordinates 
 * @component
 */
const CustomCursor = ({ points }) => {
  return (
    <rect x={points[0].x} y="0" height="100%" width="100%" fill="rgba(0, 0, 0, 0.1)"></rect>
  )
}

AverageSessions.propTypes = {
  id: PropTypes.number.isRequired
};

export default AverageSessions;