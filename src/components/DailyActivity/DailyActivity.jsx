import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import { getUserActivity } from '../../data/dataManager';
import { useParams } from 'react-router';

/**
 * React Component for daily Activity
 * @param {Object} props user data for daily Activity
 * @returns {import('react').ReactElement}
 */
function DailyActivity() {
  const { id } = useParams();
  const [userActivity, setUserActivity] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUserActivity(id)
      .then(res => {
        setUserActivity(res)
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
    <div className='dailyActivity'>
      <TopSection />
      <ResponsiveContainer width='100%' height='70%'>
        <BarChart barGap={7} margin={{ bottom: 30, top: 20, left: 20, right: 0 }} data={userActivity} >
          <CartesianGrid strokeDasharray="2 3" vertical={false} />
          <Tooltip itemStyle={{ color: 'white' }} contentStyle={{ border: 'none', color: 'white', background: '#E60000' }} content={< CustomToolTipContent />} />
          <XAxis tickSize={0} dataKey={"index"} tickMargin={16} />
          <YAxis dataKey="kilogram" yAxisId="kilogram" tickSize={0} orientation="right" domain={['dataMin - 1', 'dataMax + 1']} interval={0} axisLine={false} allowDecimals={false} />
          <YAxis dataKey="calories" yAxisId="calories" domain={[0, 'dataMax + 50']} hide={true} />
          <Bar dataKey="kilogram" yAxisId="kilogram" barSize={7} radius={[10, 10, 0, 0]} fill="#282D30" />
          <Bar dataKey="calories" yAxisId="calories" barSize={7} radius={[10, 10, 0, 0]} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * React Element including barchart's name and legend
 * @returns {import('react').ReactElement}
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
 * Custom tooltip content
 * @param {object}    payload   data
 * @param {boolean}   active    true if tooltip is displayed
 * @returns {ReactElement|null}
 */
const CustomToolTipContent = ({ payload, active }) => {
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

export default DailyActivity;