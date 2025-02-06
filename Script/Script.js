console.log(items);

let songs = items;



/* Display songs
function displaySongs() {
const songTopLyrics = document.getElementById('songList');
const songTopArtists = document.getElementById('songArtist');
const songTopAlbums = document.getElementById('songAlbum');

const songList = document.getElementById('songList');
    songList.innerHTML = songs.map(song => `
        <div class="music-items" onclick="viewLyrics('${song.song}')">
                <div class="gradient"></div>
                <img src="Image/${song.id}.png" class="covers">
                <div class="words">
                    <div class="artist-name">${song.artist}</div>
                    <div class="song-title">${song.song}</div>
                </div>
                
            </div>
    `).join('');

    const songArtist = document.getElementById('songArtist');
    songArtist.innerHTML = songs.map(song => `
        <div class="music-items" onclick="viewLyrics('${song.song}')">
                <div class="gradient"></div>
                <img src="Image/${song.id}.png" class="covers">
                <div class="words">
                    <div class="artist-name">${song.artist}</div>
                    <div class="song-title">${song.song}</div>
                </div>
                
            </div>
    `).join('');

    const songAlbum = document.getElementById('songAlbum');
    songAlbum.innerHTML = songs.map(song => `
        <div class="music-items" onclick="viewLyrics('${song.song}')">
                <div class="gradient"></div>
                <img src="Image/${song.id}.png" class="covers">
                <div class="words">
                    <div class="artist-name">${song.artist}</div>
                    <div class="song-title">${song.song}</div>
                </div>
                
            </div>
    `).join('');


}
*/

function displayAllSongs() {
    document.getElementById('body').innerHTML = '<div class="section-titles" id="sectionTitles">ALL LYRICS</div>' + 
                                                '<div class="section" id="songList">';

    const songList = document.getElementById('songList');
    songList.innerHTML = songs.map(song => `
        <div class="music-items" onclick="viewLyrics('${song.song}')">
                <div class="gradient"></div>
                <img src="Image/${song.id}.png" class="covers">
                <div class="words">
                    <div class="artist-name">${song.artist}</div>
                    <div class="song-title">${song.song}</div>
                </div>
                
            </div>
    `).join('');
}

function displayAlbums() {}

function displayArtists() {}

function displayGenre() {}

function viewLyrics(title) {
    const song = songs.find(s => s.title === title);
    localStorage.setItem('currentLyrics', JSON.stringify(song));
    window.location.href = 'lyrics.html';
}

displaySongs();