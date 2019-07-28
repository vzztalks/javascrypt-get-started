"use strict";

import Playlist from './playlist.js'; // defult import 
import { Song } from './song.js'; // named import

//App

(() => {
  let songId = 0;

  const playlist = new Playlist();

  let playingSong = null;

  const addButton = document.getElementById('btn-add-song');

  const songText = document.getElementById('txt-song');

  const playlistDiv = document.getElementById('playlist-div');

  const addSong = (songName) => {
    if (songName != undefined && songName != null && songName.length > 0) {
      songId++;
      const song = new Song(songId, songName);
      playlist.addSong(song);
      render();
      clearText();
    } else {
      alert('Please enter the song name');
    }
  };

  const render = () => {
    playlistDiv.innerHTML = '';

    const songs = playlist.getSongs();

    songs.forEach(item => {
      const song = document.createElement('LI');
      song.addEventListener('click', e => playSong(item));
      song.appendChild(document.createTextNode('[' + item.id + ']' + item.name));
      playlistDiv.appendChild(song);
    })

  };

  const playSong = (song) => {
    if (playingSong != undefined && playingSong != null) {
      playingSong.stop();
    }
    playingSong = song;
    song.play();
  };

  const clearText = () => {
    songText.value = null;
  }

  addButton.addEventListener('click', e => addSong(songText.value));

})();



