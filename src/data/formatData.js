export function formatData(data, type) {
  switch (type) {
    case 'averageSessions': return formatAverageSessions(data);
    case 'activity': return formatActivity(data);
    case 'performance': return formatPerformance(data);
    case 'score': return formatScore(data);
    default: return data;
  }
}

/**
 * Format score to match recharts requierements
 * @param   {number}  data  Score data
 * @return  {Object}  Formated data
 */
function formatScore(data) {
  let formatedData = [{ value: data * 100 }];
  return formatedData;
}
/**
 * Format average sessions to match recharts requierements
 * @param   {Object}  data  average sessions data
 * @return  {Object}  Formated data
 */
function formatAverageSessions(data) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  data.map((item, i) => (item.day = days[i]))
  return data;
}
/**
 * Format activity to match recharts requierements
 * @param   {Object}  data  activity data
 * @return  {Object}  Formated data
 */
function formatActivity(data) {
  let i = 0;
  data.map(session => {
    i++;
    return session.index = i;
  })
  return data;
}
/**
 * Format performance to match recharts requierements
 * @param   {Object}  data  Performance data
 * @return  {Object}  Formated data
 */
function formatPerformance(data) {
  return data.data.map(item => {
    return {
      value: item.value,
      kind: translateKind(data.kind[item.kind])
    }
  }).reverse();
}

/**
 * Translate performance kind from EN to FR
 * @param  {String}   string   English kind
 * @return {String}            FR kind
 */
function translateKind(string) {
  switch (string) {
    case 'energy': return "energie";
    case 'strength': return "Force";
    case 'speed': return "Vitesse";
    case 'intensity': return "Intensité";
    default: return string;
  }
}
