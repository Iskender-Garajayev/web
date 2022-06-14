import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className="w-screnn h-auto flex flex-col bg-primary ">
     <Header/>
     <main className=' mt-24 p-8 w-full'>Maincontainer</main>
    </div>
  );
}

export default App;
