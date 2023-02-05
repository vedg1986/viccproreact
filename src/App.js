import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Storage from "./pages/Storage";
function App() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path="storage" element={<Storage/>} />
      <Route path="store" element={<Store/>} />
      <Route path="/" element={<Home/>} />

    </Route>
   </Routes>
    </div>
  )
}

export default App;
