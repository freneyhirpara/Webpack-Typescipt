/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../context/GlobalState';
import './AddTransaction.css';

export default function AddTransaction(): JSX.Element {
  const { t } = useTranslation();
  const { addTransaction, setError, resetError } = useStateValue();

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleError = (): void => {
    if (!text || !amount) {
      setError(t('errorRequired'));
    } else if (Number(amount) <= 0) {
      setError(t('errorPositiveAmount'));
    }
  };

  const handleIncome = (e: any): void => {
    e.preventDefault();
    resetError();
    if (text != null && Number(amount) > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: Number(amount) * 1,
      };
      addTransaction(newTransaction);
    }
    handleError();
    setText('');
    setAmount('');
  };

  const handleExpense = (e: any): void => {
    e.preventDefault();
    resetError();
    if (text != null && Number(amount) > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: Number(amount) * -1,
      };

      addTransaction(newTransaction);
    }
    handleError();
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>{t('AddTransaction')}</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">{t('inputTitle')}</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e: any): void => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">{t('inputAmount')}</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e: any): void => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="btn-container">
          <button className="btn income" type="submit" onClick={handleIncome}>
            {t('income')}
          </button>
          <button className="btn expense" type="submit" onClick={handleExpense}>
            {t('expense')}
          </button>
        </div>
      </form>
    </>
  );
}
