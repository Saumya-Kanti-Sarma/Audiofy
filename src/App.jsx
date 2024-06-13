import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <nav className='nav-bar'>
        <Nav />
      </nav>
      <div className="main-area">
        <main className='main-bar'>
          <Main />
        </main>
        <footer className='footer-bar'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
