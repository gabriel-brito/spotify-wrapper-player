import spotify from './spotify';
import renderAlbums from './albumList';

const albums = spotify.search.albums('Slipknot');
const albumList = document.getElementById('album-list');

albums
  .then(data => renderAlbums(data.albums.items, albumList));
