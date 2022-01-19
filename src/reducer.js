import React from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_DECK':
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== action.payload),
      };
    case 'TURN_ON_EDIT_DECK_MODE':
      return {
        ...state,
        editScreen: true,
      };
    case 'TURN_OFF_EDIT_DECK_MODE':
      return {
        ...state,
        editScreen: false,
      };
    case 'SELECT_DECK_TO_EDIT':
      return {
        ...state,
        selectedDeck: action.payload,
      };
  }

  return state;
};
export default reducer;
