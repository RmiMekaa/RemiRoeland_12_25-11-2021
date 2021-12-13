/**
 * Fetch Data from API
 *
 * @param   {Number}  id    user Id
 * @param   {string}  type  url endpoint extension (available so far: performance | average-sessions | activity)
 *
 * @return  {Promise.<Object>}  requested data promise
 */
async function getDataFromAPI(id, type) {
  let url = "http://localhost:3001/user/" + id;
  if (type !== "main") url += "/" + type;
  try {
    const res = await fetch(url)
    return await res.json()
  }
  catch (err) {
    console.error("Error", err);
  }
}

export { getDataFromAPI };