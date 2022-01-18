import React from 'react';
const reducer = (state, action) => {
  if (action.type === 'DELETE_DECK') {
    console.log(action);
    return {
      ...state,
      decks: state.decks.filter(deck => deck.id !== action.payload),
    };
  }

  return state;
};
export default reducer;
