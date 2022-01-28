import axios from 'axios'

//Routes
const baseURL = "http://localhost:3000/user/";
const averageSessionsUrl = (id) => { return baseURL + id + '/average-sessions' }
const performanceUrl = (id) => { return baseURL + id + '/performance' }
const activityUrl = (id) => { return baseURL + id + '/activity' }
const mainDataUrl = (id) => { return baseURL + id }

/**
 * Fetch data from API
 * @param   {Number}  id    User id
 * @param   {string}  type  Type of requested data
 * @return  {Promise.<Object>}  Requested data promise
 */
export async function getDataFromAPI(id, type) {
  try {
    const requestUrl = setUrl(id, type);
    const res = await axios(requestUrl);
    return returnFromResponse(res, type);
  }
  catch (err) {
    console.error(err);
    throw err;
  }
}

/**
 * Config request url
 * @param   {Number}  id    User id
 * @param   {String}  type  Type of requested data
 * @return  {String}  Request url
 */
function setUrl(id, type) {
  switch (type) {
    case 'averageSessions': return averageSessionsUrl(id);
    case 'performance': return performanceUrl(id);
    case 'activity': return activityUrl(id);
    default: return mainDataUrl(id);
  }
}

/**
 * Extract required data from the response body
 * @param   {Object}  res    Response body
 * @param   {String}  type   Type of Requested data
 * @return  {Object}  Requested data
 */
function returnFromResponse(res, type) {
  switch (type) {
    case 'averageSessions': return res.data.data.sessions;
    case 'performance': return res.data.data;
    case 'activity': return res.data.data.sessions;
    case 'keyData': return res.data.data.keyData;
    case 'userInfos': return res.data.data.userInfos;
    case 'score': {
      //Handle several property names for the user score
      if (!res.data.data.score) return res.data.data.todayScore;
      return res.data.data.score;
    }
    default: return;
  }
}