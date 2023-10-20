type SideBarItemProps = {
    name: string;
    hasSubMenu?: boolean;
};

const SideBarItem: React.FC<SideBarItemProps> = ({ name }) => {
    return (
        <ul className="list-none">
            <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal hover:bg-gray-800 dark:hover-bg-gray-700"
                >
                    {/* <img src={""} alt={`${name} side bar icon`} /> */}
                    {name.trim().length > 0 && 
                        <span className="ml-3">{name}</span>
                    }
                    {/* {hasSubMenu && <span>X</span>} */}
                </a>
            </li>
        </ul>
    );
};

export default SideBarItem;
