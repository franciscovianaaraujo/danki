import { GlobalStyle, Container } from './assets/styles/global';
import { Routes, Route, Link } from "react-router-dom";
import { Background } from './components/Background';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import {Register} from './pages/Register';
import { Profile } from './pages/Profile';
import {MyAccount} from './pages/MyAccount';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function App() {
  return (
    <Container>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/perfil/:profileId" element={<Profile />} />
        <Route path="/minha-conta" element={<MyAccount />} />
        </Routes>
      
      <Footer />
      <GlobalStyle />
    </Container>
  );
}

