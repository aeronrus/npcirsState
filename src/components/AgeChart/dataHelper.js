function dataHelper(data) {
  const ageCount = { '25-30': 0, '30-35': 0, '35-40': 0, '40-45': 0, '45-50': 0 };
  const ageArray = [];

  if (!data || !Array.isArray(data) || data.length === 0 || !data[0].birthDate) {
    return [];
  }
  const aplicationDates = data.map((item) => {
    return item.birthDate.replace(/\./g, '-');
  });

  const today = new Date();
  if (aplicationDates)
    aplicationDates.forEach((item) => {
      let str = item.split('-');
      let date = str[2] + '-' + str[1] + '-' + str[0];
      let birth = new Date(date);
      let age = today.getFullYear() - birth.getFullYear();
      if (
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDay > birth.getDay)
      ) {
        ageArray.push(age);
      } else {
        ageArray.push(age - 1);
      }
    });

  for (let key in ageCount) {
    const range = key.split('-');
    const min = Number(range[0]);
    const max = Number(range[1]);

    ageArray.forEach((age) => {
      if (age >= min && age < max) {
        ageCount[key]++;
      }
    });
  }

  const array = Object.values(ageCount);
  return array;
}

module.exports = { dataHelper };
