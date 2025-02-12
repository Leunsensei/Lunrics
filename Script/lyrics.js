const song = JSON.parse(localStorage.getItem('currentLyrics'));

console.log(song)

document.getElementById('songTitle').textContent = song.title;
document.getElementById('songArtist').textContent = `by ${song.artist}`;
document.getElementById('lyricsContent').textContent = song.lyrics;