import { getDataFromAPI } from "./GetDataFromAPI";

/**
 * Fetch user sessions data from API and format it to match the component requirements
 *
 * @param   {Number}  id  User Id
 *
 * @return  {Promise.<Object>}  User Sessions
 */
async function getUserAverageSessions(id) {
  const data = await getDataFromAPI(id, "average-sessions");
  const userAverageSessions = data.data.sessions;
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  userAverageSessions.map((item, i) => (item.day = days[i]))

  return userAverageSessions;
}

export { getUserAverageSessions };
