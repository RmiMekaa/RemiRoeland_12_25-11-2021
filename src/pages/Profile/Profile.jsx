import React from 'react';
import { useParams } from 'react-router';

import Welcome from '../../components/Welcome/Welcome';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import UserRadar from '../../components/UserRadar/UserRadar';
import Score from '../../components/Score/Score';
import Nutrients from '../../components/Nutrients/Nutrients';

function Profile() {
  const { id } = useParams();
  const userId = parseInt(id);

  return (
    <main className='profile'>
      <Welcome />
      <Nutrients />
      <DailyActivity />
      <AverageSessions />
      <UserRadar />
      <Score />
    </main>
  );
}

export default Profile;