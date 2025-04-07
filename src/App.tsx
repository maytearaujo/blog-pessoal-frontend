import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
