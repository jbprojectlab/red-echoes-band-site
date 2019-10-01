import songs from './songs';
import artists from './artists';

const getArtist = name => artists.find(artist => artist.name === name);

const getArtistSongs = artist => songs.filter(song => song.artist === artist);

export const getAlbum = (artist, title) =>
  getArtistSongs(artist).filter(song => song.album === title);

export const getAlbumTitles = artist => getArtist(artist).albumTitles;

export const stopCurrentlyPlayingSongs = song => {
  Howler._howls.forEach(howl => {
    if (howl.playing() && howl !== song) {
      howl.stop();
    }
  });
};
