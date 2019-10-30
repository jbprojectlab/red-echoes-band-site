import {Howler} from 'howler';
import {
  getAlbum,
  getAlbumTitles,
  stopCurrentlyPlayingSongs,
} from '../constants/utilities';

import songs from '../constants/songs';

const SMK = songs.filter(({album}) => album === 'SMK');
const saj_M = songs.filter(({album}) => album === 'saj_M');

const smkTitles = ['SMK'];
const sajmatikTitles = ['saj_M'];

test('get songs from specific album', () => {
  expect(getAlbum('SMK', 'SMK')).toEqual(SMK);
  expect(getAlbum('SajMatiK', 'saj_M')).toEqual(saj_M);
});

test('get album titles from specific artist', () => {
  expect(getAlbumTitles('SMK')).toEqual(smkTitles);
  expect(getAlbumTitles('SajMatiK')).toEqual(sajmatikTitles);
});

// **test for app-level, then component-level rendering before testing click events
// test('stop all currently playing songs', () => {
//   Howler._howls.forEach(howl => {
//     expect(howl.playing()).toBe(false)
//   })
// })
