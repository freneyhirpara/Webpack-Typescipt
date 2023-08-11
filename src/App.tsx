import React, { useState } from 'react'
import AddTransaction from './components/AddTransaction/Index'
import Balance from './components/Balance/Index'
import Header from './components/Header/Index'
import Income from './components/IncomeExpense/Index'
import TransactionList from './components/TransactionList/Index'
import './App.css'
import Toast from './components/Toast/Index'
import i18n from './i18n/i18n'
import { useStateValue } from './context/GlobalState'

function App(): JSX.Element {
  const [lang, setLanguage] = useState(i18n.language)
  const { resetError }: any = useStateValue()

  const handleSetLanguage = async (e: any) => {
    await resetError()
    const language = e.target.value
    setLanguage(language)
    i18n.changeLanguage(language)
  }
  return (
    <>
      <div className="container">
        <Header />
        <div className="select-dropdown">
          <select defaultValue={lang} onChange={handleSetLanguage}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="nl">Dutch</option>
          </select>
        </div>
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
      <Toast />
    </>
  )
}

export default App
