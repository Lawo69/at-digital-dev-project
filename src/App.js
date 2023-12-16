import { Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from "./components/footer/Footer";
import { Navbar } from './components/navbar/Navbar';
import  Home  from './pages/home/homescreen/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
