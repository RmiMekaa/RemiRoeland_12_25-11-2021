import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import TemplateErrorLoading from "../TemplateErrorLoading/TemplateErrorLoading";
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router';

/**
 * React component for user's performance (Chart: Radar)
 * @component
 */
export default function UserRadar() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "performance");

  if (loading || error) return <TemplateErrorLoading loading={loading} error={error} className='performance' />

  return (
    <section className='performance'>
      <h2 className='sr-only'>Performance</h2>
      <ResponsiveContainer className="radarContainer">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} >
          <PolarGrid />
          <PolarAngleAxis dy={3} tick={{ fill: 'white', fontSize: 12 }} dataKey='kind' />
          <Tooltip content={<CustomRadarToolTip />} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

/**
 * Custom tooltip for radar chart
 * @param {Object}    payload   Data
 * @param {Boolean}   active    True if tooltip is displayed
 * @component
 */
const CustomRadarToolTip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <p className="perfTooltip">
        <span style={{ color: "black", margin: "0" }} className="tooltip__text">{payload[0].payload.kind}:</span>
        <span style={{ color: "black", margin: "0" }} className="tooltip__text"><span style={{ color: '#FF0101' }}>{payload[0].payload.value}</span>/200</span>
      </p>
    )
  }
  return null
}