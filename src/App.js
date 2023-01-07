import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from './Components/Navabar/Navbar.jsx';
import Adults from './Pages/Adults/Adults.jsx';
// import Choosemode from './Pages/Choosemode/Choosemode';
import { Homepage } from './Pages/Homepage/Homepage.jsx';
import RegisterChildren from './Pages/RegisterChildren/RegisterChildren.jsx';

const Layout = () => (
  <>
   <Navbar />
  <Outlet />
  </>
)


function App() {


  return (
    <div className='App'>
    <Routes>
      <Route element={<Layout />}>

          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/home/adultreg" element={<Adults />}></Route>
          <Route path="/home/childreg" element={<RegisterChildren />}></Route>

      {/* <div> */}
        
        {/* <Homepage /> */}
        {/* <Choosemode /> */}
        {/* <Adults /> */}
        {/* <RegisterChildren /> */}
        {/* </div> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;
