import songs from './songs';
import artists from './artists';

const getArtist = name => artists.find(artist => artist.name === name);
const getArtistSongs = artist => songs.filter(({artist}) => artist === artist);

export const getAlbum = (artist, title) => getArtistSongs(artist);
export const getAlbums = artist => getArtist(artist).albums;
