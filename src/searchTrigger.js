import spotify from './spotify';
import renderAlbums from './albumList';

const albumList = document.getElementById('album-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const albums = spotify.search.albums('Slipknot');


export default function searchTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    spotify.search.albums(searchInput.value)
      .then(data => renderAlbums(data.albums.items, albumList));
  });
}

