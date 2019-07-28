"use strict";

//Song

class Song {
  constructor(songId, songName) {
    this.id = songId;
    this.name = songName;
    this.playStatus = 'stopped';
  }

  play() {
    this.playStatus = 'playing';
    alert('playing ' + this.name);
  };

  stop() {
    this.playStatus = 'stopped';
    alert('stoped ' + this.name);
  };
}

//named export
export { Song };
