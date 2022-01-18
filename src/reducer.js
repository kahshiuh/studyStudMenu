import React from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_DECK':
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== action.payload),
      };
    case 'CHANGE_EDIT_DECK_MODE':
      console.log(action.payload);
      return {
        ...state,
        editScreen: !action.payload,
      };
  }

  return state;
};
export default reducer;
