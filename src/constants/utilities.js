import songs from './songs';
import artists from './artists';

const getArtist = name => artists.find(artist => artist.name === name);

const getArtistSongs = artist => songs.filter(song => song.artist === artist);

export const getAlbum = (artist, title) =>
  getArtistSongs(artist).filter(song => song.album === title);

export const getArtistAlbums = artist => getArtist(artist).artistAlbums;

export const stopAllSongs = song => {
  Howler._howls.forEach(howl => {
    if (howl !== song) {
      howl.stop();
    }
  });
};
