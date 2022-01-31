import React from 'react';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import TemplateErrorLoading from "../TemplateErrorLoading/TemplateErrorLoading";
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router';

/**
 * React Component for User Average Sessions (Chart: LineChart)
 * @param {Object} props 
 * @component
 */
export default function AverageSessions() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "averageSessions");

  if (loading || error) return <TemplateErrorLoading loading={loading} error={error} className='averageSessions' />

  return (
    <section className='averageSessions'>
      <h2 className='averageSessions__heading'>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 70, bottom: 10, left: 20, right: 20 }}>
          <Tooltip
            content={<CustomToolTipContent />}
            cursor={<CustomCursor />}
            contentStyle={{ border: 'none', background: 'white', }}
          />
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="white" tickMargin={10} tick={{ fontSize: 12, opacity: 0.7 }} />
          <Line className='averageSessions__line' dot={false} legendType="none" type="monotone" dataKey="sessionLength" stroke="white" strokeOpacity={0.8} strokeWidth="1.8" />
        </LineChart>
      </ResponsiveContainer>
    </section >
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