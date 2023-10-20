import SideBarItem from "./side_bar_item";

const SideBar: React.FC = () => {
    return (
        <div data-testid="sidebar" className="max-w-2xl mx-auto">
            <aside className="w-64" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-900">
                    <SideBarItem name="Store" />
                    <SideBarItem name="Library" />
                    <SideBarItem name="Community" />
                    <SideBarItem name="Friends" hasSubMenu />
                    <SideBarItem name="Settings" />
                    <SideBarItem name="Help" />
                </div>
            </aside>
        </div>
    );
};

export default SideBar;
