import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import TemplateErrorLoading from "../TemplateErrorLoading/TemplateErrorLoading";
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router';
import React from 'react';

/**
 * React Component for user's daily activity (Chart: BarChart)
 * @component
 */
export default function DailyActivity() {
  const { id } = useParams();
  const userId = parseInt(id);
  const { loading, error, data } = useFetch(userId, "activity");

  if (loading || error) return <TemplateErrorLoading loading={loading} error={error} className='dailyActivity' />

  return (
    <section className='dailyActivity'>
      <h2 className='sr-only'>Activité quotidienne</h2>
      <TopSection />
      <ResponsiveContainer width='100%' height='70%'>
        <BarChart barGap={7} margin={{ bottom: 30, top: 20, left: 20, right: 0 }} data={data} >
          <CartesianGrid strokeDasharray="2 3" vertical={false} />
          <Tooltip content={< CustomActivityToolTip />} />
          <XAxis tickSize={0} dataKey={"index"} tickMargin={16} />
          <YAxis dataKey="kilogram" yAxisId="kilogram" tickSize={0} orientation="right" domain={['dataMin - 1', 'auto']} type="number" tickCount={3} interval={0} axisLine={false} allowDecimals={false} />
          <YAxis dataKey="calories" yAxisId="calories" domain={[0, 'dataMax + 50']} hide={true} />
          <Bar dataKey="kilogram" yAxisId="kilogram" barSize={7} radius={[10, 10, 0, 0]} fill="#282D30" />
          <Bar dataKey="calories" yAxisId="calories" barSize={7} radius={[10, 10, 0, 0]} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

/**
 * React component for barchart's name and legend
 * @component
 */
const TopSection = () => {
  return (
    <div className='topSection'>
      <h2 className='topSection__heading'>Activité quotidienne</h2>
      <div className='topSection__legend'>
        <span className='topSection__legend__weight'>Poids (kg)</span>
        <span className='topSection__legend__calories'>Calories brûlées (kCal)</span>
      </div>
    </div>
  )
}

/**
 * Custom tooltip for bar chart
 * @param {object}    payload   Data
 * @param {boolean}   active    True if tooltip is displayed
 * @comopnent
 */
const CustomActivityToolTip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="barChartTooltip">
        <span className="barChartTooltip__weigth">{payload[0].value}kg</span>
        <span className="barChartTooltip__calories">{payload[1].value}Kcal</span>
      </div>
    )
  }
  return null
}