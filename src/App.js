import React, { useState } from 'react';
import './App.css';

var musicGenres = {
  Rock : [
    {
      "name" : "Numb",
      "artist": "Linkin Park",
      "year" : "2019",
      "playbacks" : "123,456,789",
      "coverArt" : "https://img.discogs.com/bsKHrnjVYg5YTWj71pRW1E1XYvM=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2179514-1268308869.jpeg.jpg"
    },
    {
      "name" : "Papercut",
      "artist": "Linkin Park",
      "year" : "",
      "playbacks" : "",
      "coverArt" : "https://img.discogs.com/dDSlb0ar-Co7LAB6R9ybAueK708=/fit-in/600x529/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-624704-1536520187-9613.jpeg.jpg"
    },
    {
      "name" : "OHNE DICH",
      "artist": "Rammstein",
      "year" : "",
      "playbacks" : "",
      "coverArt" : "https://img.discogs.com/Y7HQ2H8fdUm-_qIW5DbIt45qDAQ=/fit-in/600x523/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-467115-1407161735-2435.jpeg.jpg"
    },
    {
      "name" : "Sonne",
      "artist": "Rammstein",
      "year" : "",
      "playbacks" : "",
      "coverArt" : "https://img.discogs.com/BODJdWoFDk-Um0MecDnUD6WaojQ=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9494383-1482868964-5038.png.jpg"
    },
    {
      "name" : "Heart-Shaped Box",
      "artist": "Nirvana",
      "year" : "",
      "playbacks" : "",
      "coverArt" : "https://img.discogs.com/uLzACPQh_azzVcIGQD7H8sDTIgY=/fit-in/599x527/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11742680-1521616478-3437.jpeg.jpg"
    }],
  Rap : [
    {
      "name" : "Venom",
      "artist": "Eminem",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "Real Friends",
      "artist": "Kanye West",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "In Too Deep",
      "artist": "Eminem",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "Rap God",
      "artist": "Eminem",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "Still D.R.E",
      "artist": "Dr. Dre",
      "year" : "",
      "playbacks" : ""
    }],
  HipHop : [
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    }],
  Legendaries : [
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
    },
    {
      "name" : "",
      "artist": "",
      "year" : "",
      "playbacks" : ""
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
            <button key={index} className="btn-genre" onClick={() => handleGenreClick(genre)}>{genre}</button>  
          )}
        </div>
      </div>
      <div className="music-icons">
        {musicGenres[currentGenre].map( (song, index) =>
          <div key={index} className="song-div">
            <div className="song-cover"><img src={song.coverArt} alt="cover" /></div>
            <div className="song-name"><p>{song.name}</p></div>
            <div className="song-artist"><p>{song.artist}</p></div>
            <div className="song-year"><p>{song.year}</p></div>
            <div className="song-playbacks"><p>{song.playbacks}</p></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
