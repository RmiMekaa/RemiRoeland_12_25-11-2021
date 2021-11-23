import React from 'react';
import { useParams } from 'react-router';
import { getUserMainData } from '../../data/dataManager';

import Welcome from '../../components/Welcome/Welcome';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import AverageDuration from '../../components/AverageDuration/AverageDuration';
import UserRadar from '../../components/UserRadar/UserRadar';
import Score from '../../components/Score/Score';
import Nutrients from '../../components/Nutrients/Nutrients';

function Profile() {
  const { id } = useParams();
  const userId = parseInt(id);
  const userData = getUserMainData(userId);

  return (
    <main className='profile'>
      <Welcome name={userData.userInfos.firstName} />
      <DailyActivity />
      <AverageDuration id={userId} />
      <UserRadar id={userId} />
      <Score />
      <Nutrients />
    </main>
  );
}

export default Profile;