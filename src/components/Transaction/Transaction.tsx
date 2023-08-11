import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.css';
import { useStateValue } from '../../context/GlobalState';
import { trans } from '../../context/reducer';

type props = {
  transaction: trans;
};
function Transaction({ transaction }: props): JSX.Element {
  const { resetError, deleteTransaction }: any = useStateValue();

  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDelete = (removeTransaction: trans): void => {
    resetError();
    deleteTransaction(removeTransaction);
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        type="submit"
        onClick={(): void => handleDelete(transaction)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Transaction;
