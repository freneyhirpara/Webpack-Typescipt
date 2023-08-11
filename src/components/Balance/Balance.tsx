import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../context/GlobalState';

function Balance(): JSX.Element {
  const { t } = useTranslation();
  const { totalExpense, totalIncome } = useStateValue();

  const total = +(totalIncome + totalExpense).toFixed(2);
  const sign = total < 0 ? '-' : '';
  return (
    <>
      <h4>{t('balance')}</h4>
      <h1>
        {sign}${Math.abs(total)}
      </h1>
    </>
  );
}

export default Balance;
