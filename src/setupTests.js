// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

beforeAll(() => {
  window.scrollTo = jest.fn();
  HTMLCanvasElement.prototype.getContext = jest.fn();
});
