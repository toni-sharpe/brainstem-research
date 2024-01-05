// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-canvas-mock'

const { registerFont } = require('canvas');

// Registering a font is required when using the canvas package
registerFont('./font.ttf', { family: 'YourFontName' });

// Mocking the canvas
jest.mock('canvas', () => {
  const { createCanvas } = require('canvas');
  const canvas = createCanvas(800, 600);
  const context = canvas.getContext('2d');

  return {
    ...canvas,
    getContext: jest.fn(() => context),
  };
});
