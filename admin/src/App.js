import './App.css';
import MainDash from './component/MainDash/MainDash';
import RightSidebar from './component/RightSidebar/RightSidebar';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass' >
        <Sidebar/>
        <MainDash/>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;
