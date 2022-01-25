import { USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_PERFORMANCE } from "../mock/data";

const userMainData = (id) => { return USER_MAIN_DATA.find(obj => { return obj.id === id }) }
const userActivity = (id) => { return USER_ACTIVITY.find(obj => { return obj.userId === id }) }
const userAverageSessions = (id) => { return USER_AVERAGE_SESSIONS.find(obj => { return obj.userId === id }) }
const userPerformance = (id) => { return USER_PERFORMANCE.find(obj => { return obj.userId === id }) }

/**
 * Get Mock Data
 * @param   {number}  id    User id
 * @param   {String}  type  Requested data
 * @return  {Object}
 */
export function getMockData(id, type) {
  switch (type) {
    case "averageSessions": return userAverageSessions(id).sessions;
    case "activity": return userActivity(id).sessions;
    case "userInfos": return userMainData(id).userInfos;
    case "keyData": return userMainData(id).keyData;
    case "score": return userMainData(id).score;
    case "performance": return userPerformance(id);
    default: return;
  }
}