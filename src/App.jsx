import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
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

        </footer>
      </div>
    </>
  )
}

export default App
