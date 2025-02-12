console.log(items);

let songs = items;



/* Display songs */
function displaySongs() {

    const songList = document.getElementById('songArtist');

    songList.innerHTML = songs
        .slice(0, 10)
        .map(song => `
        <div class="artist-list" onclick="viewLyrics('${song.song}')">
                    ${song.artist} - "${song.song}"
            </div>
    `).join('');


    const songAlbum = document.getElementById('songAlbum');

    const uniqueAlbums = [...new Set(songs.map(song => song.album))];
    
    songAlbum.innerHTML = uniqueAlbums.map(album => `
        <div class="music-items" onclick="viewAlbums('${album}')">
                <div class="gradient"></div>
                <img src="Image/${album}.png" class="covers">
                <div class="words">
                    <div class="artist-name">${album}</div>
                </div>
                
            </div>
    `).join('');


}


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
    const song = songs.find(s => s.song === title);
    localStorage.setItem('currentLyrics', JSON.stringify(song));
    window.location.href = 'lyrics.html';
}

function viewAlbums(title) {
    const song = songs.filter(song => song.album === title);
    localStorage.setItem('currentAlbums', JSON.stringify(song));
    window.location.href = 'albums.html';
}

displaySongs();