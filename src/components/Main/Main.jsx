import React, { useState, useEffect } from 'react';
import './main.css'

function Main() {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('#');
  const [isLoading, setIsLoading] = useState(false);
  const [buttonColor, setButtonColor] = useState('#dcdcdc88');
  const [aColor, setaColor] = useState('#00000082');
  const [inputButtonColor, setInputButtonColor] = useState('#ff4500');
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': "80788fe660msh2a2d0abcc31a601p196e5bjsnff5e45309623",
      'x-rapidapi-host': "youtube-mp310.p.rapidapi.com"
    }
  };
  useEffect(() => {
    if (videoUrl.includes('https://youtu.be')) {
      setInputButtonColor('#ff4500');
    } else {
      setInputButtonColor('grey');
    }
  }, [videoUrl]);

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const Download = async () => {
    if (!videoUrl.includes('https://youtu.be')) {
      alert('The provided link is not from YouTube!');
      return;
    }
    setIsLoading(true);
    const url = `https://youtube-mp310.p.rapidapi.com/download/mp3?url=${encodeURIComponent(videoUrl)}`;
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setDownloadLink(result.downloadUrl);
      console.log(result.downloadUrl);
      setIsLoading(false);
      setButtonColor('rgb(255, 68, 0)');
      setaColor("white");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <header className='topmost'>
        <img src="youtube.webp" alt="YOUTUBE" />
        <h1>Convert Youtube To Mp3</h1>
      </header>
      <div className="input-area">
        <input
          type="text"
          placeholder='Paste link here..'
          value={videoUrl}
          onChange={handleInputChange}
        />
        <button className='input-search-btn' onClick={Download} style={{ backgroundColor: inputButtonColor }}>
          <img src="right.svg" alt="search" />
        </button>
      </div>
      <div className="download-btn">
        <button style={{ backgroundColor: buttonColor }}>
          <a href={downloadLink} style={{ color: aColor, textDecoration: 'none' }}>
            {isLoading ? 'Loading...' : 'Download'}
          </a>
        </button>
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
      <br />
    </>
  )
}

export default Main
