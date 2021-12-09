import data from '../data/data'

const api = true;

async function getFromAPI(userId, type) {
  let url = "http://localhost:3001/user/" + userId;
  if (type !== "main") url += "/" + type;
  try {
    const res = await fetch(url);
    return await res.json();
  }
  catch (err) {
    console.error("Error", err);
  }
}

async function getUserInfos(id) {
  const data = await getFromAPI(id, "main");
  const userInfos = data.data.userInfos;
  return userInfos;
}
async function getUserKeyData(id) {
  const data = await getFromAPI(id, "main");
  const userKeyData = data.data.keyData;
  return userKeyData;
}
async function getUserScore(id) {
  const data = await getFromAPI(id, "main");
  let userScore;
  if (!data.data.todayScore) userScore = data.data.score;
  else userScore = data.data.todayScore;

  const formatScore = [{ value: userScore * 100 }];

  return formatScore;
}
async function getUserActivity(id) {
  const data = await getFromAPI(id, "activity");
  const userActivity = data.data.sessions;

  let i = 0;
  userActivity.map(session => {
    i++;
    return session.index = i;
  })

  return userActivity;
}
async function getUserAverageSessions(id) {
  const data = await getFromAPI(id, "average-sessions");
  const userAverageSessions = data.data.sessions;

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  userAverageSessions.map((item, i) => (item.day = days[i]))

  return userAverageSessions;
}
async function getUserPerformance(id) {
  const data = await getFromAPI(id, "performance");
  const userPerformance = data.data.data;

  const formatPerformance = userPerformance.map(item => {
    return {
      value: item.value,
      kind: translateKind(data.data.kind[item.kind])
    }
  });

  return formatPerformance.reverse();
}

/**
 * Translate performance kind from en to fr
 * @param  {String}   string   English kind
 * @return {String}            FR kind
 */
function translateKind(string) {
  switch (string) {
    case 'energy': return "energie";
    case 'strength': return "Force";
    case 'speed': return "Vitesse";
    case 'intensity': return "Intensité";
    default: return string;
  }
}

export {
  getUserActivity,
  getUserPerformance,
  getUserAverageSessions,
  getUserKeyData,
  getUserScore,
  getFromAPI,
  getUserInfos
};