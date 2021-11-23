import data from '../data/data'

function getUserMainData(id) {
  return data.USER_MAIN_DATA.find(user => {
    return user.id === parseInt(id);
  })
}

/**
 * Get User Performances
 * 
 * @param   {number}  id  User ID
 *
 * @return  {array}  User Performances
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

function getUserAverageDuration(id) {
  const userData = data.USER_AVERAGE_SESSIONS.find(user => {
    return user.userId === id
  })
  const sessions = userData.sessions;
  return sessions;
}

export {
  getUserMainData,
  getUserPerformances,
  getUserAverageDuration,
};