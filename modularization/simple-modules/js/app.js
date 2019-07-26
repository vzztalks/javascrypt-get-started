(function() {
  //App
  var songId = 0;

  var playlist = new Playlist();

  var playingSong = null;

  var addButton = document.getElementById('btn-add-song');

  var songText = document.getElementById('txt-song');

  var playlistDiv = document.getElementById('playlist-div');

  function addSong(songName) {
    if (songName != undefined && songName != null && songName.length > 0) {
      songId++;
      var song = new Song(songId, songName);
      playlist.addSong(song);
      render();
      clearText();
    } else {
      alert('Please enter the song name');
    }
  }

  function render() {
    playlistDiv.innerHTML = '';

    var songs = playlist.getSongs();

    var i;
    for (i = 0; i < songs.length; i++) {
      var item = songs[i];

      var song = document.createElement('LI');
      song.cs;

      song.addEventListener('click', function(e) {
        playSong(item);
      });

      song.appendChild(
        document.createTextNode('[' + item.id + ']' + item.name)
      );
      playlistDiv.appendChild(song);
    }
  }

  function playSong(song) {
    if (playingSong != undefined && playingSong != null) {
      playingSong.stop();
    }
    playingSong = song;
    song.play();
  }

  function clearText() {
    songText.value = null;
  }

  addButton.addEventListener('click', function(e) {
    addSong(songText.value);
  });
})();
