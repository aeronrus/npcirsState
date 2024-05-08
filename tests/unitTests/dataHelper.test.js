import { dataHelper } from '../../src/components/AgeChart/dataHelper';

describe('С помощью массива тестов testCases', () => {
  const testCases = [
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1998',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [1, 0, 0, 0, 0],
    },
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1993',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [0, 1, 0, 0, 0],
    },
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1979',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [0, 0, 0, 0, 1],
    },
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.2000',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [0, 0, 0, 0, 0],
    },
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1970',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [0, 0, 0, 0, 0],
    },
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.2025',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [0, 0, 0, 0, 0],
    },
    {
      argumemt: [
        {
          id: 1,
          surname: 'Рогалев',
          name: 'Руслан',
          patronymic: 'Евгеньевич',
          birthDate: '21.04.1903',
          applicationDate: '23.04.2023',
        },
      ],
      expected: [0, 0, 0, 0, 0],
    },
    {
      argumemt: [
        {
          a: 1,
          b: 'Рогалев',
          c: 'Руслан',
          patronymic: 'Евгеньевич',
        },
      ],
      expected: [],
    },
  ];
  testCases.forEach((test) => {
    it(`Входяща строка: ${JSON.stringify(test.argumemt, null, 2)} ожидаю: ${JSON.stringify(
      test.expected,
    )}`, () => {
      const res = dataHelper(test.argumemt);
      expect(res).toEqual(test.expected);
    });
  });
});
