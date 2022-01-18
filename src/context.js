import React, {useState, useContext, useReducer, useEffect} from 'react';
import reducer from './reducer';
import data from './data';
const AppContext = React.createContext();

const initialState = {
  decks: [
    {id: 1, name: 'physics'},
    {id: 2, name: 'calc 2'},
    {id: 3, name: 'us history'},
    {id: 4, name: 'writing 102'},
  ],
  total: 0,
};
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const deleteDeck = props => {
    console.log(props);
    dispatch({type: 'DELETE_DECK', payload: props});
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteDeck,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
