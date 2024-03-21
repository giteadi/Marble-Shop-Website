import HomePage from "./components/Home";
import Login from "./pages/Login";
import Sign from './pages/Sign';
import {Routes,Route} from 'react-router-dom';
import Nav2 from "./components/Nav2";
import Form from './pages/Form';
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Nav2/>
     <Routes>
        <Route path="/login"  element={<Login/>} />
        <Route path="/register"  element={<Sign/>} />
        <Route path="/"  element={<HomePage/>} />
        <Route path="/contact" element={<Form/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>} />
     </Routes>
    </div>
  );
}

export default App;
