import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import UserRadar from '../../components/UserRadar/UserRadar';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';

export default function Profile() {

  return (
    <main className='profile'>
      <Welcome />
      <KeyData />
      <DailyActivity />
      <AverageSessions />
      <UserRadar />
      <Score />
    </main>
  );
}