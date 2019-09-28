import songs from '../constants/songs';

const initialState = songs;

const RECEIVE_SONG = 'RECEIVE_SONG';

const gotSong = song => ({
  type: RECEIVE_SONG,
  song,
});

export const getSong = title => async dispatch => {
  try {
    dispatch(gotSong(title));
  } catch (err) {
    console.error(err);
  }
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SONG:
      return state.filter(song => song.title === action.song);
    default:
      return state;
  }
};

export default songsReducer;
