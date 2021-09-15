import React, { useState } from 'react';
import './App.css';

var musicGenres = {
  Rock : [
    {
      "name" : "Numb",
      "artist": "Linkin Park",
      "coverArt" : "https://img.discogs.com/bsKHrnjVYg5YTWj71pRW1E1XYvM=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2179514-1268308869.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=kXYiU_JCYtU",
      "rating": "4.9/5"
    },
    {
      "name" : "Papercut",
      "artist": "Linkin Park",
      "coverArt" : "https://img.discogs.com/dDSlb0ar-Co7LAB6R9ybAueK708=/fit-in/600x529/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-624704-1536520187-9613.jpeg.jpg",
      "URL": "https://www.youtube.com/watch?v=vjVkXlxsO8Q",
      "rating": "4.2/5"
    },
    {
      "name" : "OHNE DICH",
      "artist": "Rammstein",
      "coverArt" : "https://img.discogs.com/Y7HQ2H8fdUm-_qIW5DbIt45qDAQ=/fit-in/600x523/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-467115-1407161735-2435.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=LIPc1cfS-oQ",
      "rating": "4.5/5"
    },
    {
      "name" : "Sonne",
      "artist": "Rammstein",
      "coverArt" : "https://img.discogs.com/BODJdWoFDk-Um0MecDnUD6WaojQ=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9494383-1482868964-5038.png.jpg",
      "URL" : "https://www.youtube.com/watch?v=StZcUAPRRac",
      "rating": "4.8/5"
    },
    {
      "name" : "Heart-Shaped Box",
      "artist": "Nirvana",
      "coverArt" : "https://img.discogs.com/uLzACPQh_azzVcIGQD7H8sDTIgY=/fit-in/599x527/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11742680-1521616478-3437.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=92fK3K8nagk",
      "rating": "3.9/5"
    }],
  Rap : [
    {
      "name" : "Venom",
      "artist": "Eminem",
      "coverArt" : "https://img.discogs.com/54hPRsThaq0irOvpUOoX6P5-bUQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12491176-1536405001-7183.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=8CdcCD5V-d8",
      "rating": "3.6/5"
    },
    {
      "name" : "Real Friends",
      "artist": "Kanye West",
      "coverArt" : "https://img.discogs.com/pY0q1lhGC4CP-N561WvlYU5Arhk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8115775-1455442036-8867.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=fWD9GF-Ogf4",
      "rating": "4.1/5"
    },
    {
      "name" : "The Monster",
      "artist": "Eminem",
      "coverArt" : "https://img.discogs.com/uwDgfKLjhv8O_Yitrdb_4wtgkZI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5069131-1521292931-6165.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=EHkozMIXZ8w",
      "rating": "4.6/5"
    },
    {
      "name" : "Rap God",
      "artist": "Eminem",
      "coverArt" : "https://img.discogs.com/PTVGXeUlUjUsHZf1hD9lLNTEINI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5003378-1584462714-4009.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=XbGs_qK2PQA",
      "rating": "5/5"
    },
    {
      "name" : "Still D.R.E",
      "artist": "Dr. Dre",
      "coverArt" : "https://img.discogs.com/mKfTEI-06KUFB0906Uy8fszZO3I=/fit-in/581x578/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-350437-1480775019-2508.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=_CL6n0FJZpk",
      "rating": "4.7/5"
    }],
  HipHop : [
    {
      "name" : "Sunflower",
      "artist": "Post Malone",
      "coverArt" : "https://img.discogs.com/6Sdmr9w8v8kxfIHXF6-OIR2sID0=/fit-in/437x431/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15563131-1593685437-9666.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=ApXoWvfEYVU",
      "rating": "4.2/5"
    },
    {
      "name" : "Pump It",
      "artist": "Black Eyed Peas",
      "coverArt" : "https://img.discogs.com/jSxKcMW83YRhpSw1e0Hn2c23lTM=/fit-in/250x250/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1796917-1243941031.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=ZaI2IlHwmgQ",
      "rating": "4.5/5"
    },
    {
      "name" : "Blinding Lights",
      "artist": "The Weeknd",
      "coverArt" : "https://img.discogs.com/zChGY8v4kgW7F5h2eZ8aevw_VlM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14944477-1587467863-2642.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
      "rating": "3.5/5"
    },
    {
      "name" : "God's Plan",
      "artist": "Drake",
      "coverArt" : "https://img.discogs.com/i-3zFLbT4-s6Dm_0Fs5zg3nmQ4w=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12252821-1535317927-2134.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
      "rating": "3.8/5"
    },
    {
      "name" : "Mirrors",
      "artist": "Justin Timberlake",
      "coverArt" : "https://img.discogs.com/d3KKDrE1KasdgHJOFbQyMxRRAhM=/fit-in/600x522/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4341516-1362259089-5369.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=uuZE_IRwLNI",
      "rating": "3.2/5"
    }],
  Legendaries : [
    {
      "name" : "Sugar",
      "artist": "Robin Schulz",
      "coverArt" : "https://img.discogs.com/0t9yEx1HOiAumFQQ41SoPVxKyjw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7517657-1443123242-6499.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=bvC_0foemLY",
      "rating": "4.5/5"
    },
    {
      "name" : "Broken Dreams",
      "artist": "Green Day",
      "coverArt" : "https://img.discogs.com/47WeYS9ETqBI40Iz0ckpRMQOHDI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11079432-1522174455-6945.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=Soa3gO7tL-c",
      "rating": "4.9/5"
    },
    {
      "name" : "Save The World",
      "artist": "Swedish House Mafia",
      "coverArt" : "https://img.discogs.com/jFzV5qeBECwZxGIl9ViajYxxKHk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2894741-1306090469.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=BXpdmKELE1k",
      "rating": "4.5/5"
    },
    {
      "name" : "Sweater Weather",
      "artist": "The Neighbourhood",
      "coverArt" : "https://img.discogs.com/kKbX104hQwu7FKEmQ3A2mK6CDaU=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4536643-1367692270-3985.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=GCdwKhTtNNw",
      "rating": "4.6/5"
    },
    {
      "name" : "Love Me Again",
      "artist": "John Newman",
      "coverArt" : "https://img.discogs.com/rouShhgQjlxRIbXekxMhL8Nqd_M=/fit-in/600x522/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4868244-1400780764-8389.jpeg.jpg",
      "URL" : "https://www.youtube.com/watch?v=CfihYWRWRTQ",
      "rating": "4.1/5"
    }],
};

function App() {
  const [currentGenre, setcurrentGenre] = useState("Rock")
  
  function handleGenreClick(genre){
    setcurrentGenre(genre);
  }

  return (
    <div className="App">
      <div className="title">
        <div className="main-title">
          <h1>Hamza's Music List</h1>
        </div>
        <div className="sub-title">
          <p>Here are my top 5 all-time favourites in the below categories!</p>
        </div>
      </div>
      <div className="genres">
        <div className="btn-row">
          {Object.keys(musicGenres).map( (genre, index) => 
            <p key={index} className="btn-genre" style={{color: "white"}} onClick={() => handleGenreClick(genre)}>{genre}</p>  
          )}
        </div>
      </div>
      <div className="music-icons">
        {musicGenres[currentGenre].map( (song, index) =>
          <div key={index} >
            <a href={song.URL} className="song-div" style={{textDecoration: "none"}}>
              <div className="song-cover"><img className="song-image" src={song.coverArt} alt="cover" /></div>
              <div className="song-name"><p>{song.name}</p></div>
              <div className="song-artist"><p>{song.artist}</p></div>
              <div className="song-year"><p>{song.year}</p></div>
              <div className="song-rating"><p>My Rating: {song.rating}</p></div>
            </a>
          </div>
        )}
      </div>
      <div className="footer">
          <p className="footer-text">Click on the card to hear the music on 
            <svg className="yt" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </p>
      </div>
      <div class="bottom-container">
      <div class="icons">
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hamza-husein/"><i
            class="fab fa-linkedin fa-2x"></i></a>
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://github.com/Hamdrive"><i
            class="fab fa-github fa-2x"></i></a>
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://hamzahusein.netlify.app"><i 
        class="fas fa-user fa-2x"></i></a>
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://twitter.com/itsHamhere"><i
            class="fab fa-twitter-square fa-2x"></i></a>
      </div>
      <p class="copyright">© 2021 Hamza Husein</p>
    </div>
    </div>
  );
}

export default App;
