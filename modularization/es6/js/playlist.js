"use strict";

//Playlist

class Playlist {

  constructor() {
    this.songs = [];
  }

  addSong(song){
    this.songs.push(song);
  };

  getSongs(){
    return this.songs;
  };
}

//default export
export default Playlist;
