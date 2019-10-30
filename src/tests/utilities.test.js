import {
  getAlbum,
  getAlbumTitles,
  stopCurrentlyPlayingSongs,
} from '../constants/utilities';

const saj_M = [
  {
    title: 'oryn',
    artist: 'SajMatiK',
    album: 'saj_M',
    src: ['/assets/songs/oryn.wav'],
    length: '0:00',
  },
  {
    title: 'sint',
    artist: 'SajMatiK',
    album: 'saj_M',
    src: ['/assets/songs/sint.wav'],
    length: '0:00',
  },
  {
    title: 'pensk',
    artist: 'SajMatiK',
    album: 'saj_M',
    src: ['/assets/songs/pensk.wav'],
    length: '0:00',
  },
  {
    title: 'sinuht',
    artist: 'SajMatiK',
    album: 'saj_M',
    src: ['/assets/songs/sinuht.wav'],
    length: '0:00',
  },
  {
    title: 'stinarchkt',
    artist: 'SajMatiK',
    album: 'saj_M',
    src: ['/assets/songs/stinarchkt.wav'],
    length: '0:00',
  },
  {
    title: 'kyhr',
    artist: 'SajMatiK',
    album: 'saj_M',
    src: ['/assets/songs/kyhr.wav'],
    length: '0:00',
  },
];
test('get songs from specific album', () => {
  expect(getAlbum('SajMatiK', 'saj_M')).toEqual(saj_M);
});
