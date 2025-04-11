import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormTema from './components/formTema/FormTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormPostagem from './components/postagens/formPostagem/Formpostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
