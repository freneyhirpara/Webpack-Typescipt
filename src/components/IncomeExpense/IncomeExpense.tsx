import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStateValue } from '../../context/GlobalState'
import './IncomeExpense.css'

function IncomeExpense(): JSX.Element {
  const { t } = useTranslation()
  const { totalIncome, totalExpense } = useStateValue()

  return (
    <div className="inc-exp-container">
      <div>
        <h4>{t('income')}</h4>
        <p className="money plus">${totalIncome}</p>
      </div>
      <div>
        <h4>{t('expense')}</h4>
        <p className="money minus">${totalExpense * -1}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
