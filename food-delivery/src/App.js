import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, MainContainer, CreateContainer } from './components';
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screnn h-screen flex flex-col bg-primary ">
        <Header/>
        <main className=' mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer/>}/>
            <Route path='/createItem' element={<CreateContainer/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
