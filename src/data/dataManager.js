import data from '../data/data'

/**
 * Get User Main Data
 *
 * @param   {number}  id  User ID
 *
 * @return  {Object}  User Main Data
 */
function getUserMainData(id) {
  return data.USER_MAIN_DATA.find(user => {
    return user.id === id;
  })
}

/**
 * Get User Activity
 *
 * @param   {number}  id  User ID
 *
 * @return  {Object}  User Activity
 */
function getUserActivity(id) {
  const userData = data.USER_ACTIVITY.find(user => {
    return user.userId === id;
  })
  const activity = userData.sessions;
  let i = 0;
  activity.map(session => {
    i++;
    return session.index = i;
  })

  return activity;
}

/**
 * Get User Performances
 * 
 * @param   {number}  id  User ID
 *
 * @return  {Array.<Object>}  User Performances
 */
function getUserPerformances(id) {
  const userData = data.USER_PERFORMANCE.find(user => {
    return user.userId === id;
  })

  const performances = [];
  userData.data.forEach(data => {
    let item = {};
    const type = data.kind;
    item.value = data.value;
    item.kind = userData.kind[type]
    performances.push(item)
  })

  return performances;
}

/**
 * Get User Average Sessions
 * 
 * @param   {number}  id  User ID
 *
 * @return  {Array.<Object>}  User Average Sessions
 */
function getUserAverageSessions(id) {
  return data.USER_AVERAGE_SESSIONS.find(user => {
    return user.userId === id
  }).sessions
}

function getUserKeyData(id) {
  const userData = getUserMainData(id);
  return userData.keyData;
}

function getUserScore(id) {
  let scoreData = [];
  let score = {}
  const userData = getUserMainData(id);
  score.value = userData.score * 100;
  scoreData.push(score)
  return scoreData;
}

export {
  getUserMainData,
  getUserActivity,
  getUserPerformances,
  getUserAverageSessions,
  getUserKeyData,
  getUserScore,
};