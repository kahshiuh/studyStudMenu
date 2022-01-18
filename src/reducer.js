const reducer = (state, action) => {
  switch (state) {
    case 'DELETE_DECK':
      return {
        ...state,
        decks: state.decks.filter(deck => deck.id !== action.payload),
      };
  }
  return state;
};
export default reducer;
