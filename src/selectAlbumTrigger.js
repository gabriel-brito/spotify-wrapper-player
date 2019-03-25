import spotify from './spotify';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';


const album = spotify.album.getAlbum('4ZDBQSIDIZRUBOG2OHcN3T');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');
const albumList = document.getElementById('album-list');

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger(){
  albumList.addEventListener('click', (e) => {
    const target = e.target;
    e.preventDefault();
    makeRequest(target.getAttribute('data-album-id'));
  });
}
