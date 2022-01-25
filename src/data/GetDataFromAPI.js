import axios from 'axios'

const url = "http://localhost:3000/user/";

/**
 * Fetch Data from API
 *
 * @param   {Number}  id    user Id
 * @param   {string}  type  url endpoint extension (available so far: performance | average-sessions | activity)
 *
 * @return  {Promise.<Object>}  requested data promise
 */
async function getDataFromAPI(id, type) {
  try {
    switch (type) {
      case 'averageSessions': return fetchAverageSessions(id);
      case 'performance': return fetchPerformance(id);
      case 'activity': return fetchActivity(id);
      case 'keyData': return fetchKeyData(id);
      case 'score': return fetchScore(id);
      case 'userInfos': return fetchUserInfos(id);
      default: return;
    }
  }
  catch (err) {
    console.error(err);
    throw err;
  }
}

async function fetchAverageSessions(id) {
  const res = await axios(url + id + '/average-sessions')
  return await res.data.data.sessions;
}

async function fetchPerformance(id) {
  const res = await axios(url + id + '/performance')
  return await res.data.data;
}

async function fetchActivity(id) {
  const res = await axios(url + id + '/activity')
  return await res.data.data.sessions;
}

async function fetchKeyData(id) {
  const res = await axios(url + id)
  return await res.data.data.keyData;
}
async function fetchScore(id) {
  const res = await axios(url + id)
  if (!res.data.data.score) return res.data.data.todayScore;
  return await res.data.data.score;
}

async function fetchUserInfos(id) {
  const res = await axios(url + id)
  return await res.data.data.userInfos;
}





export { getDataFromAPI };