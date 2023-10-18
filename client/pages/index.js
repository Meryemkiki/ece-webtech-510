// pages/index.js (Accueil)
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <h1>Accueil</h1>
      <p>Notre page web !!!</p>
      {/* Contenu de la page d'accueil */}
    </div>
  );
}

export default Home;
