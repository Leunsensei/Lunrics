const selectedAlbums = JSON.parse(localStorage.getItem('currentAlbums'));
const songs = items;

console.log(selectedAlbums);

const songList = document.getElementById('songArtist');

    songList.innerHTML = selectedAlbums
        .map(album => `
        <div class="artist-list" onclick="viewLyrics('${album.song}')">
                    ${album.artist} - "${album.song}"
            </div>
    `).join('');


function viewLyrics(title) {
    const song = songs.find(s => s.song === title);
    localStorage.setItem('currentLyrics', JSON.stringify(song));
    window.location.href = 'lyrics.html';
}