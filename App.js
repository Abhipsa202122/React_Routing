//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Digital from './Digital';
import NewIt from './NewIT';
import DigitalParam from './DigitalParam';
import Nav from "./Nav";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header className="App-header">
       <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={App} ></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about/digital" element={<Digital/>}></Route>
        <Route path="/about/newit" element={<NewIt/>}></Route>
        <Route path="/about/digital/:id" element={<DigitalParam/>}></Route>
       </Routes>
       </BrowserRouter>
       </header>
       </div>
       );
    }
export default App;




