import songs from './songs';

export const stopAllSongs = song => {
  Howler._howls.forEach(howl => {
    if (howl !== song) {
      howl.stop();
    }
  });
};
