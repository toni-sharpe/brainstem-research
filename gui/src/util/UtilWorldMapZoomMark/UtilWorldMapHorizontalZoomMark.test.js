import {
  calcHorizontalZoomMarkLeft,
  calcHorizontalZoomMarkWidth,
} from './UtilWorldMapZoomMark'

test('calcHorizontalZoomMarkWidth() should return correct height when zoom is 2', () => {
  const zoom = 2
  expect(calcHorizontalZoomMarkWidth({ zoom })).toBe('49.5')
})

test('calcHorizontalZoomMarkWidth() should return correct height when zoom is 1', () => {
  const zoom = 1
  expect(calcHorizontalZoomMarkWidth({ zoom })).toBe('99.0')
})

test('calcHorizontalZoomMarkWidth() should return correct height when zoom is 0.5', () => {
  const zoom = 0.5
  expect(calcHorizontalZoomMarkWidth({ zoom })).toBe('198.0')
})


it('should return correct left value when x is positive and zoom is 2', () => {
  const x = 20;
  const zoom = 2;
  expect(calcHorizontalZoomMarkLeft({ x, zoom })).toBe(1.53556);
});

it('should return correct left value when x is negative and zoom is 1', () => {
  const x = -30;
  const zoom = 1;
  expect(calcHorizontalZoomMarkLeft({ x, zoom })).toBe(3.60669);
});

it('should return correct left value when x is positive and zoom is 0.5', () => {
  const x = 40;
  const zoom = 0.5;
  expect(calcHorizontalZoomMarkLeft({ x, zoom })).toBe(8.78452);
});

