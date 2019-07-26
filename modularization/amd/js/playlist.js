//Playlist

function Playlist() {
  var songs = [];

  this.addSong = function(song) {
    songs.push(song);
  };

  this.getSongs = function() {
    return songs;
  };
}
