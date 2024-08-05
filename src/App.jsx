// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Destinos from './components/Destinos';
import Contato from './components/Contato';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'Home':
        return <Home />;
      case 'Destinos':
        return <Destinos />;
      case 'Contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={() => setPaginaAtual('Home')}>Home</button>
        <button onClick={() => setPaginaAtual('Destinos')}>Destinos</button>
        <button onClick={() => setPaginaAtual('Contato')}>Contato</button>
      </nav>
      {renderPagina()}
      <Footer />
    </div>
  );
}

export default App;