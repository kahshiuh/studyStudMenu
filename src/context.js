import React, {useState, useContext, useReducer, useEffect} from 'react';
import reducer from './reducer';
import {data} from './data';
const AppContext = React.createContext();

const initialState = {
  decks: data,
  total: 0,
  editScreen: false,
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
    dispatch({type: 'CHANGE_EDIT_DECK_MODE', payload: state.editScreen});
    dispatch({type: 'EDIT_DECK_MODE', payload: props});
    console.log('asds');
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteDeck,
        viewDeck,
        editDeck,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
