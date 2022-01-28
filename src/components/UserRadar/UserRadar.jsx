import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import TemplateErrorLoading from "../TemplateErrorLoading/TemplateErrorLoading";
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router';

/**
 * React component for user performance radar (Chart: Radar)
 * @component
 */
export default function UserRadar() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "performance");

  if (loading || error) return <TemplateErrorLoading loading={loading} error={error} className='radar' />

  return (
    <section className='radar'>
      <h2 className='sr-only'>Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }} cx="50%" cy="50%" outerRadius="70%" data={data} >
          <PolarGrid />
          <PolarAngleAxis dy={3} tick={{ fill: 'white', fontSize: 12 }} dataKey='kind' />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}