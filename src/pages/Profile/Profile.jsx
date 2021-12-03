import React from 'react';
import { useParams } from 'react-router';
import { getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformances, getUserScore } from '../../data/dataManager';

import Welcome from '../../components/Welcome/Welcome';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import UserRadar from '../../components/UserRadar/UserRadar';
import Score from '../../components/Score/Score';
import Nutrients from '../../components/Nutrients/Nutrients';

function Profile() {
  const { id } = useParams();
  const userId = parseInt(id);

  const userMainData = getUserMainData(userId)
  const userInfos = userMainData.userInfos;
  const userKeyData = userMainData.keyData;
  const userActivity = getUserActivity(userId);
  const userAverageSessions = getUserAverageSessions(userId);
  const userPerformances = getUserPerformances(userId);
  const userScore = getUserScore(userId);

  return (
    <main className='profile'>
      <Welcome name={userInfos.firstName} />
      <DailyActivity data={userActivity} />
      <AverageSessions data={userAverageSessions} />
      <UserRadar data={userPerformances} />
      <Score data={userScore} />
      <Nutrients data={userKeyData} />
    </main>
  );
}

export default Profile;