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
    case 'TURN_ON_EDIT_MODAL':
      return {
        ...state,
        editModalOn: true,
      };
    case 'TURN_OFF_EDIT_MODAL':
      return {
        ...state,
        editModalOn: false,
      };
    case 'TURN_ON_EDIT_DECK_MODAL':
      return {
        ...state,
        editDeckModalOn: true,
      };
    case 'TURN_OFF_EDIT_DECK_MODAL':
      return {
        ...state,
        editDeckModalOn: false,
      };
    case 'REMOVE_CARD':
      let arr = Object.entries(state.decks[state.selectedDeck - 1])[2][1];
      arr.splice(action.payload, 1);
      arr = Object.entries(state.decks[state.selectedDeck - 1])[3][1];
      arr.splice(action.payload, 1);
      return {
        ...state,
      };
  }

  return state;
};
export default reducer;
