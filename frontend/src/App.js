import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/signup" element={<Signup />} />
      </Routes>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
