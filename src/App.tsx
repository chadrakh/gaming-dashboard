import { useEffect } from 'react';
import SideBar from "./components/features/components/features/sidebar/side_bar";

const App : React.FC = () => {
  useEffect(() => { document.title = "Gaming Dashboard" }, []);

    return (
        <>
            <SideBar />
        </>
    );
};

export default App;
