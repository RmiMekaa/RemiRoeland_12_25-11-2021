import { getDataFromAPI } from "./GetDataFromAPI";

/**
 * Fetch user score from API and format it to match the component requirements
 *
 * @param   {Number}  id  User Id
 *
 * @return  {Promise.<Object>}  User Score
 */
async function getUserScore(id) {
  let mainData = await getDataFromAPI(id, "main");
  let userScore;
  if (!mainData.data.todayScore) userScore = mainData.data.score;
  else userScore = mainData.data.todayScore;

  const formatScore = [{ value: userScore * 100 }];

  return formatScore;
}

export { getUserScore };