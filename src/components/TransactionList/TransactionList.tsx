import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStateValue } from '../../context/GlobalState'
import { trans } from '../../context/reducer'
import Transaction from '../Transaction/Transaction'

function TransactionList(): JSX.Element {
  const { t } = useTranslation()
  const { transactions } = useStateValue()
  return (
    <>
      <h3>{t('history')}</h3>
      <ul className="list">
        {transactions.length !== 0 ? (
          transactions.map(
            (transaction: trans): JSX.Element => (
              <Transaction key={transaction.id} transaction={transaction} />
            )
          )
        ) : (
          <div>{t('emptyList')}</div>
        )}
      </ul>
    </>
  )
}

export default TransactionList
