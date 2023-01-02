import Navbar from './comps/Navbar';
import Home from './Pages/Home';
import "./App.css"
import Footer from './comps/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>  
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
