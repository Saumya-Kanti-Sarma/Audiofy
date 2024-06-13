import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <>
      <div className="f-heading">
        <p>
          <b>|| Created: July 12 • 2024 ||</b> <br />
          By Saumya Kanti Sarma As A project work for Educational Purpose.
        </p>
      </div>
      <div className="f-tools">
        <div>
          <p> Mp3 Downloaders</p>
          <ul>
            <li>YOUTUBE Mp3 Downloader</li>
            <li>INSTAGRAM Mp3 Downloader</li>
            <li>FACEBOOK Mp3 Downloader</li>
          </ul>
        </div>
        <div>
          <p> Mp4 Downloaders</p>
          <ul>
            <li>YOUTUBE VIDEO Downloader</li>
            <li>INSTAGRAM VIDEO Downloader</li>
            <li>FACEBOOK VIDEO Downloader</li>
            <li>LINKDIN VIDEO Downloader</li>
            <li>TWITTER VIDEO Downloader</li>
          </ul>
        </div>
        <div>
          <p> SHORT CONTENT Downloaders</p>
          <ul>
            <li>YOUTUBE SHORTS Downloader</li>
            <li>INSTAGRAM REELS Downloader</li>
            <li>FACEBOOK REELS Downloader</li>
          </ul>
        </div>
      </div>
      <br />
      <div className='api'>

        <h1>API REF: </h1>
        <p> <a href="https://rapidapi.com/openapis/api/youtube-to-mp4-mp3/playground/apiendpoint_304a09c5-68b9-4c09-9f9f-633ead7ee060">
          Rapid API • Mp3 Downloader
        </a>
        </p>
      </div>
      <br />
    </>
  )
}

export default Footer
