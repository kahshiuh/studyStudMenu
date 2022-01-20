import React, {useState, useContext, useReducer, useEffect} from 'react';
import reducer from './reducer';
import {data} from './data';
const AppContext = React.createContext();

const initialState = {
  decks: data,
  total: 0,
  editScreen: false,
  selectedDeck: 0,
  editModalOn: false,
  editDeckModalOn: false,
  currentTerm: 'Enter Term Name',
  currentDefination: 'Enter Defination',
};
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const deleteDeck = props => {
    dispatch({type: 'DELETE_DECK', payload: props});
  };
  const viewDeck = props => {
    dispatch({type: 'VIEW_DECK', payload: props});
  };
  const editDeck = props => {
    dispatch({type: 'TURN_ON_EDIT_DECK_MODE', payload: state.editScreen});
    dispatch({type: 'SELECT_DECK_TO_EDIT', payload: props});
  };
  const stopEditDeck = () => {
    dispatch({type: 'TURN_OFF_EDIT_DECK_MODE'});
  };
  const turnOnEditModal = () => {
    dispatch({type: 'TURN_ON_EDIT_MODAL'});
  };
  const turnOffEditModal = () => {
    dispatch({type: 'TURN_OFF_EDIT_MODAL'});
  };
  const turnOnEditDeckModal = () => {
    dispatch({type: 'TURN_ON_EDIT_DECK_MODAL'});
  };
  const turnOffEditDeckModal = () => {
    dispatch({type: 'TURN_OFF_EDIT_DECK_MODAL'});
  };
  const removeCard = props => {
    dispatch({type: 'REMOVE_CARD', payload: props});
  };
  const openAddDeck = () => {
    dispatch({type: 'TURN_ON_EDIT_DECK_MODAL'});
  };
  const addDeck = props => {
    dispatch({type: 'ADD_DECK', payload: props});
  };
  const addCard = props => {
    dispatch({type: 'ADD_CARD', payload: props});
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteDeck,
        viewDeck,
        editDeck,
        stopEditDeck,
        turnOnEditModal,
        turnOffEditModal,
        turnOnEditDeckModal,
        turnOffEditDeckModal,
        removeCard,
        openAddDeck,
        addDeck,
        addCard,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
