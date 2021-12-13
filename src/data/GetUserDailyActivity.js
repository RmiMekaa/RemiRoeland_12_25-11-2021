import { getDataFromAPI } from "./GetDataFromAPI";

/**
 * Fetch user activity data from API and format it to match the component requirements
 *
 * @param   {Number}  id  User Id
 *
 * @return  {Promise.<Object>}  User Activity
 */
async function getUserDailyActivity(id) {
  const data = await getDataFromAPI(id, "activity");
  const userActivity = data.data.sessions;

  let i = 0;
  userActivity.map(session => {
    i++;
    return session.index = i;
  })

  return userActivity;
}

export { getUserDailyActivity };