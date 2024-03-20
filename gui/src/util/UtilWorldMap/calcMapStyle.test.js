import { calcMapStyle } from './UtilWorldMap';

describe('calcMapStyle', () => {
  const data = [
    ['US', 10, 20, 30],
    ['CA', 5, 15, 25],
  ];
  const dataStart = 1;
  const dataEnd = 5;
  const start = 2;
  const end = 4;
  const hue = 140;
  const step = 1;

  test('Calculates map style for data rows', () => {
    const result = calcMapStyle({
      data,
      dataEnd,
      dataStart,
      end,
      hue,
      start,
      step,
    });

    // Check if expected keys are present
    expect(result).toHaveProperty('2');
    expect(result).toHaveProperty('3');

    // Check values for specific keys
    expect(result['2']['US']).toEqual([
      'US',
      { fill: 'hsl(140, 80%, 96.5%)', stroke: 'hsl(140, 10%, 56%)' },
    ]);
    expect(result['2']['CA']).toEqual([
      'CA',
      { fill: 'hsl(140, 80%, 98.25%)', stroke: 'hsl(140, 10%, 58%)' },
    ]);
    expect(result['3']['US']).toEqual([
      'US',
      { fill: 'hsl(140, 80%, 93%)', stroke: 'hsl(140, 10%, 52%)' },
    ]);
    expect(result['3']['CA']).toEqual([
      'CA',
      { fill: 'hsl(140, 80%, 94.75%)', stroke: 'hsl(140, 10%, 54%)' },
    ]);
  });

  test('Handles negative values properly with star pattern fill', () => {
    const dataWithNegative = [
      ['US', -1, 0, 0],
      ['CA', 0, 0, 0],
    ];

    const result = calcMapStyle({
      data: dataWithNegative,
      dataEnd,
      dataStart,
      end,
      hue,
      start,
      step,
    });

    expect(result['2']['US']).toEqual([
      'US',
      { fill: 'url(#star)', stroke: undefined },
    ]);
    expect(result['2']['CA']).toEqual([
      'CA',
      { fill: 'hsl(140, 80%, 100%)', stroke: 'hsl(140, 10%, 60%)' },
    ]);
    expect(result['3']['US']).toEqual([
      'US',
      { fill: 'hsl(140, 80%, 100%)', stroke: 'hsl(140, 10%, 60%)' },
    ]);
    expect(result['3']['CA']).toEqual([
      'CA',
      { fill: 'hsl(140, 80%, 100%)', stroke: 'hsl(140, 10%, 60%)' },
    ]);
  });

  test('Handles empty data array', () => {
    const emptyData = [];
    const result = calcMapStyle({
      data: emptyData,
      dataEnd,
      dataStart,
      end,
      hue,
      start,
      step,
    });

    expect(result).toEqual({});
  });
});
