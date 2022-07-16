import './App.css';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Burgers from './burgers/Burgers';
import Nachos from './nachos/Nachos';
import Pizza from './pizza/Pizza';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/burgers' element={<Burgers></Burgers>}></Route>
            <Route path='/nachos' element={<Nachos></Nachos>}></Route>
            <Route path='/pizza' element={<Pizza></Pizza>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
