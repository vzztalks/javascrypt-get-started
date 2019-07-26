//App

var songId = 0;

var playingSong = null;

var playlistDiv = document.getElementById('playlist-div');

var songText = document.getElementById('txt-song');

var addButton = document.getElementById('btn-add-song');

addButton.addEventListener('click', function(e) {
  addSong(songText.value);
});

function addSong(songName) {
  if (songName != undefined && songName != null && songName.length > 0) {
    songId++;

    playlist.push(Song(songId, songName));

    render();
    clearText();
  } else {
    alert('Please enter the song name');
  }
}

function render() {
  playlistDiv.innerHTML = '';

  var i;
  for (i = 0; i < playlist.length; i++) {
    var item = playlist[i];

    var song = document.createElement('LI');

    song.addEventListener('click', function(e) {
      playSong(item);
    });

    song.appendChild(document.createTextNode('[' + item.id + ']' + item.name));
    playlistDiv.appendChild(song);
  }
}

function clearText() {
  songText.value = null;
}

function playSong(song) {
  if (playingSong != undefined && playingSong != null) {
    playingSong.stop();
  }
  playingSong = song;
  song.play();
}

//Playlist

var playlist = [];

//Song

function Song(songId, songName) {
  return {
    id: songId,
    name: songName,
    playStatus: 'stopped',

    play: function() {
      this.playStatus = 'playing';
      alert('playing ' + this.name);
    },

    stop: function() {
      this.playStatus = 'stopped';
      alert('stoped ' + this.name);
    }
  };
}
