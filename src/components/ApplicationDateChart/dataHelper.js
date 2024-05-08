export function dataHelper(data) {
  const monthsCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };
  if (!data || !Array.isArray(data) || data.length === 0 || !data[0].applicationDate) {
    return {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };
  }
  const aplicationDates = data
    ? data.map((item) => {
        return item.applicationDate.replace(/\./g, '-');
      })
    : [];
  aplicationDates.forEach((item) => {
    let str = item.split('-');
    let date = str[2] + '-' + str[1] + '-' + str[0];
    let month = new Date(date).getMonth() + 1;
    return monthsCount[month]++;
  });
  const monthsKeys = {
    January: monthsCount[1],
    February: monthsCount[2],
    March: monthsCount[3],
    April: monthsCount[4],
    May: monthsCount[5],
    June: monthsCount[6],
    July: monthsCount[7],
    August: monthsCount[8],
    September: monthsCount[9],
    October: monthsCount[10],
    November: monthsCount[11],
    December: monthsCount[12],
  };

  return monthsKeys;
}
