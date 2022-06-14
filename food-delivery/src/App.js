import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import {MainContainer} from './components/MainContainer'
import {CreateContainer} from './components/CreateContainer'

function App() {
  return (
    <div className="w-screnn h-auto flex flex-col bg-primary ">
     <Header/>
     <main className=' mt-24 p-8 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
