import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  REFRESH_STATE,
  RESET_ERROR,
  SET_ERROR,
} from './ActionTypes';
import { initState, trans } from './reducer';

export type actionMethod = {
  type: string;
  payload: trans | string | initState;
};

export const addTransactionAction = (transaction: trans): actionMethod => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const deleteTransactionAction = (transaction: trans): actionMethod => ({
  type: DELETE_TRANSACTION,
  payload: transaction,
});

export const setErrorAction = (error: string): actionMethod => ({
  type: SET_ERROR,
  payload: error,
});

export const resetErrorAction = (): actionMethod => ({
  type: RESET_ERROR,
  payload: '',
});

export const refreshStateAction = (state: initState): actionMethod => ({
  type: REFRESH_STATE,
  payload: state,
});
