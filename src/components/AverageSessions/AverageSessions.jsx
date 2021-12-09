/**
 * @typedef {import('react').ReactElement}  ReactElement
 */
import React, { useEffect, useState } from 'react';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router';
import { getUserAverageSessions } from '../../data/dataManager';


function AverageSessions() {
  const { id } = useParams();
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserAverageSessions(id)
      .then(res => {
        setUserAverageSessions(res)
        setLoadingStatus(false)
      })
      .catch(err => {
        setError(true)
        setLoadingStatus(false)
      })
  }, [id])

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>Erreur</div>
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
 * Custom tooltip content
 * @param {object}    payload   data
 * @param {boolean}   active    true if tooltip is displayed
 * @returns {ReactElement|null}
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
 * @param   {array} points coordinates 
 * @returns {ReactElement}
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

export default AverageSessions;