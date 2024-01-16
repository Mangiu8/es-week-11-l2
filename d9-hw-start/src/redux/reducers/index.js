const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

const initialState = {
  favourite: {
    list: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, reducer };
