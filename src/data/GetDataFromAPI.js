import axios from 'axios'

//Routes
const baseURL = "http://localhost:3000/usder/";
const urls = {
  averageSessions: (id) => { return baseURL + id + '/average-sessions' },
  performance: (id) => { return baseURL + id + '/performance' },
  activity: (id) => { return baseURL + id + '/activity' },
  score: (id) => { return baseURL + id },
  userInfos: (id) => { return baseURL + id },
  keyData: (id) => { return baseURL + id },
}

/**
 * Fetch data from API
 * @param   {Number}  id    User id
 * @param   {string}  type  Type of requested data
 * @return  {Promise.<Object>}  Requested data promise
 */
export async function getDataFromAPI(id, type) {
  try {
    const res = await axios(urls[type](id));
    return dataFromResponse(res, type);
  }
  catch (err) {
    console.error(err);
    throw err;
  }
}

/**
 * Extract required data from the response body
 * @param   {Object}  res    Response body
 * @param   {String}  type   Type of Requested data
 * @return  {Object}  Requested data
 */
function dataFromResponse(res, type) {
  const responseData = res.data.data;
  if (type === 'performance') return responseData;
  if (type === 'averageSessions' || type === 'activity') return responseData.sessions;
  if (type === 'keyData') return responseData.keyData;
  if (type === 'userInfos') return responseData.userInfos;
  //Handle several property names issue for the user score
  if (type === 'score') return (responseData.score ? responseData.score : responseData.todayScore)
}