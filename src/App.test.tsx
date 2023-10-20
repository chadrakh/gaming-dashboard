import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders component successfully', () => {
    render(<App />);

    expect(document.title).toBe("Gaming Dashboard");
  });

// test('renders SideBar component', () => {
//   render(<App />);
  
//   const sideBarComponent = screen.getByRole('sidebar');
//   expect(sideBarComponent).toBeInTheDocument();
// });
