import { useEffect } from 'react';

const App : React.FC = () => {
  useEffect(() => { document.title = "Gaming Dashboard" }, []);

  return (
    <div>
    </div>
  )
}

export default App;
