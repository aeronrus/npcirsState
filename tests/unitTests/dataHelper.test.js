const { dataHelper } = require('../../src/components/AgeChart/dataHelper');

describe('validateValue', () => {
  test('Возраст 25', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1998',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([1, 0, 0, 0, 0]);
  });
  test('Возраст 30', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1993',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([0, 1, 0, 0, 0]);
  });
  test('Возраст 45', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1979',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([0, 0, 0, 0, 1]);
  });
});

describe('unValidateValue', () => {
  test('Возраст 24', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.2000',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([0, 0, 0, 0, 0]);
  });
  test('Возраст 54', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1970',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([0, 0, 0, 0, 0]);
  });
});
describe('unCorrectValue', () => {
  test('Возраст -1', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.2025',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([0, 0, 0, 0, 0]);
  });
  test('Возраст 130', () => {
    expect(
      dataHelper([
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1903',
          applicationDate: '23.04.2023',
        },
      ]),
    ).toEqual([0, 0, 0, 0, 0]);
  });
  test('Некорректный объект', () => {
    expect(
      dataHelper([
        {
          a: 1,
          b: 'Рогалев',
          c: 'Руслан',
          patronymic: 'Евгеньевич',
        },
      ]),
    ).toEqual([]);
  });
  test('Пустой массив', () => {
    expect(dataHelper([])).toEqual([]);
  });
});
