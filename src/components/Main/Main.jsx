import React from 'react'
import './main.css'
function Main() {
  return (
    <>
      <header className='topmost'>
        <img src="youtube.webp" alt="YOUTUBE" />
        <h1>Convert Youtube To Mp3</h1>
      </header>
      <div className="input-area">
        <input type="text" placeholder='Paste link here..' />
        <button className='input-search-btn'>
          <img src="right.svg" alt="search" />
        </button>
      </div>
      <div className="download-btn">
        <button>DOWNLOAD</button>
      </div>
      <div className='tut-area'>
        <div className="heading-area">
          <h2> How to convert Youtube To Mp3?</h2>
          <img src="3.png" alt="logo" />
        </div>
        <ul className='tut-list'>
          <li>1. Copy Youtube Video Link And Paste it in the search Box.</li>
          <li>2. Click On the <b>"ARROW"</b> button To generate your Mp3.</li>
          <li>3. Click on the <b>"DOWNLOAD"</b> Button once it turn Orange.</li>
          <li>4. The Downloading Page will load and you can save your file for <b>FREE!.</b></li>
        </ul>
      </div>
    </>
  )
}

export default Main
