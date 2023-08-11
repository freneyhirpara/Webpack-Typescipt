import React, { useEffect, createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer, { initialState, initState, trans } from './reducer';
import {
  addTransactionAction,
  deleteTransactionAction,
  setErrorAction,
  resetErrorAction,
  refreshStateAction,
} from './Actions';

// Prepares the dataLayer
const GlobalContext = createContext(initialState);

const GlobalState = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(transaction: trans): void {
    dispatch(deleteTransactionAction(transaction));
  }

  function addTransaction(transaction: trans): void {
    dispatch(addTransactionAction(transaction));
  }

  function setError(error: any): void {
    dispatch(setErrorAction(error));
  }

  function resetError(): void {
    dispatch(resetErrorAction());
  }

  function refreshState(): void {
    const newState = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state')!)
      : initialState;
    dispatch(refreshStateAction(newState));
  }

  useEffect(() => {
    refreshState();
  }, []);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        totalIncome: state.totalIncome,
        totalExpense: state.totalExpense,
        deleteTransaction,
        addTransaction,
        setError,
        resetError,
        refreshState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(GlobalContext);

GlobalState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GlobalState;
