//Song

function Song(songId, songName) {
  this.id = songId;
  this.name = songName;
  this.playStatus = 'stopped';

  this.play = function() {
    this.playStatus = 'playing';
    alert('playing ' + this.name);
  };

  this.stop = function() {
    this.playStatus = 'stopped';
    alert('stoped ' + this.name);
  };
}

module.exports = Song;
