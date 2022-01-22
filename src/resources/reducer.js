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
    case 'ADD_DECK':
      let idNum = Object.keys(state.decks).length + 1;
      let vars = {
        id: idNum,
        name: action.payload,
        terms: [],
        definations: [],
      };
      state.decks[idNum] = vars;

      return {
        ...state,
      };
    case 'ADD_CARD':
      //will need to update to keep removed decks in mind unless selectedDeck is not given id
      if (state.replaceCard === -1) {
        state.decks[state.selectedDeck - 1].terms.push(action.payload.term);
        state.decks[state.selectedDeck - 1].definations.push(
          action.payload.defination,
        );
      } else {
        state.decks[state.selectedDeck - 1].definations[state.replaceCard] =
          action.payload.defination;
        state.decks[state.selectedDeck - 1].terms[state.replaceCard] =
          action.payload.term;
      }
      return {
        ...state,
      };
    case 'SET_PLACEHOLDER':
      let tempTerm = state.decks[state.selectedDeck - 1].terms[action.payload];
      let tempDef =
        state.decks[state.selectedDeck - 1].definations[action.payload];
      return {
        ...state,
        currentTerm: tempTerm,
        currentDefination: tempDef,
      };
    case 'RESET_PLACEHOLDER':
      return {
        ...state,
        currentTerm: 'Enter Term Name',
        currentDefination: 'Enter Defination',
      };
    case 'RESET_REPLACE_CARD':
      return {
        ...state,
        replaceCard: -1,
      };
    case 'SET_REPLACE_CARD':
      return {
        ...state,
        replaceCard: action.payload,
      };
    case 'RESET_ACTIVATED_DECK':
      return {
        ...state,
        activatedDeck: -1,
      };
    case 'SET_ACTIVATED_DECK':
      return {
        ...state,
        replaceCard: action.payload,
      };
  }

  return state;
};
export default reducer;
