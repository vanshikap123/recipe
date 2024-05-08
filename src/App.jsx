import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Dummy from './Component/Dummy';
import Navbar from './page/Navbar';
import Form from './Component/Form';
import Singalpage from './Component/Singalpage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      |<Route path='/dummy' element={<Dummy/>}/>
      |<Route path='/form' element={<Form/>}/>
      |<Route path='/single' element={<Singalpage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;