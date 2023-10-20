import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SideBar from './side_bar';

beforeEach(() => {
    render(<SideBar />);
});

describe("SideBar", () => {
    test("render succeeds", () => {
        const sideBarElement = screen.getByTestId('sidebar');

        expect(sideBarElement).toBeInTheDocument();
    })
});
