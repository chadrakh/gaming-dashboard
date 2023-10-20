import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

beforeEach(() => {
    render(<App />);
  });

describe("App", () => {
    test("render succeeds", () => {
        expect(document.title).toBe("Gaming Dashboard");
    });
});
