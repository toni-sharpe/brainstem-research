import { calcFirstScreenLoadYear } from './UtilWorldMap';

test('returns currentYear when it is within the range', () => {
  const result = calcFirstScreenLoadYear({
    currentYear: 2022,
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2022);
});

test('returns startYear when currentYear is before startYear', () => {
  const result = calcFirstScreenLoadYear({
    currentYear: 1999,
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2000);
});

test('returns startYear when currentYear is the same as startYear', () => {
  const result = calcFirstScreenLoadYear({
    currentYear: 2000,
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2000);
});

test('returns endYear when currentYear is after endYear', () => {
  const result = calcFirstScreenLoadYear({
    currentYear: 2031,
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2030);
});

test('returns endYear when currentYear is the same as endYear', () => {
  const result = calcFirstScreenLoadYear({
    currentYear: 2030,
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2030);
});

test('returns startYear when currentYear is null', () => {
  const result = calcFirstScreenLoadYear({
    currentYear: null,
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2000);
});

test('returns startYear when currentYear is undefined', () => {
  const result = calcFirstScreenLoadYear({
    startYear: 2000,
    endYear: 2030,
  });
  expect(result).toBe(2000);
});
