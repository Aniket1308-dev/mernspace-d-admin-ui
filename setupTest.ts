import '@testing-library/jest-dom'
import {beforeEach, vi} from 'vitest';

// Mock ResizeObserver as a proper class constructor
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  const matchMediaMock = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener:vi.fn(), // deprecated
    removeListener:vi.fn(), // deprecated
    addEventListener:vi.fn(),
    removeEventListener:vi.fn(),
    dispatchEvent:vi.fn(),
  }));
  const computedStyleMock = vi.fn().mockImplementation(() => ({}));
  vi.stubGlobal('matchMedia', matchMediaMock);
  vi.stubGlobal('ComputedStyle', computedStyleMock);
});