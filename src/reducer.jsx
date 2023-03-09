export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //set token to null after developing
  // token:
  //   "BQCrIn73j5M-e8sil6ID3_bsDvg-1HhERQKFIwWRAQPQmkQHEg4QC95C8ajl9Z0VcdkiQuxnvdYemBU-OffJseVTJVRZ02JbbP2swv1SvSqwUMpl_cqONyuY9Bf-TgU6qpvMga5-K9QalblZpXL8JasBp6F8XdVhXKx7RNWc0hoPP3LrC-uOQK4fnSRXMKKbKa3hUU5_PYg-UbRmwV24Cw",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly: action.discover_weekly,
        }

    default:
      return state;
  }
};

export default reducer;
