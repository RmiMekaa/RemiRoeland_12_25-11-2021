import React from 'react';
import { useParams } from 'react-router';

import Welcome from '../../components/Welcome/Welcome';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import UserRadar from '../../components/UserRadar/UserRadar';
import Score from '../../components/Score/Score';
import KeyData from '../../components/KeyData/KeyData';

function Profile() {
  const { id } = useParams();
  const userId = parseInt(id);

  return (
    <main className='profile'>
      <Welcome id={userId} />
      <KeyData id={userId} />
      <DailyActivity id={userId} />
      <AverageSessions id={userId} />
      <UserRadar id={userId} />
      <Score id={userId} />
    </main>
  );
}

export default Profile;