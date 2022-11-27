import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default App;
