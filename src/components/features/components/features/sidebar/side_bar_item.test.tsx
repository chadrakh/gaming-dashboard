import { render, screen } from '@testing-library/react';
import SideBarItem from './side_bar_item';

describe("SideBarItem", () => {
    test("render succeeds if passed name prop", () => {
        render(<SideBarItem name="Item Name" />);
    
        expect(screen.queryByText("Item Name"));
    });
    
    test("render fails if name prop is missing", () => {
        const itemName = "";
        render(<SideBarItem name={itemName} />);
    
        expect(screen.queryAllByText(itemName));
    });
});
