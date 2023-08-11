export type trans = {
  id: number;
  text: string;
  amount: number;
};

export type initState = {
  transactions: Array<trans>;
  error: string;
  totalExpense: number;
  totalIncome: number;
  deleteTransaction: (transaction: trans) => void;
  addTransaction: (transaction: trans) => void;
  setError: (error: string) => void;
  resetError: () => void;
  refreshState: () => void;
};
export const initialState: initState = {
  transactions: [],
  error: '',
  totalIncome: 0,
  totalExpense: 0,
  deleteTransaction: (transaction) => {},
  addTransaction: (transaction) => {},
  setError: (error: string) => {},
  resetError: () => {},
  refreshState: () => {},
};

const reducer = (state: initState = initialState, action: any): initState => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      if (action.payload.amount > 0) {
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction: any): boolean => transaction.id !== action.payload.id
          ),
          totalIncome: state.totalIncome - action.payload.amount,
        };
      }
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: any): boolean => transaction.id !== action.payload.id
        ),
        totalExpense: state.totalExpense - action.payload.amount,
      };
    case 'ADD_TRANSACTION':
      if (action.payload.amount > 0) {
        return {
          ...state,
          totalIncome: state.totalIncome + action.payload.amount,
          transactions: [action.payload, ...state.transactions],
        };
      }
      return {
        ...state,
        totalExpense: state.totalExpense + action.payload.amount,
        transactions: [action.payload, ...state.transactions],
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    case 'RESET_ERROR':
      return {
        ...state,
        error: '',
      };

    case 'REFRESH_STATE':
      return {
        ...action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
