/* eslint-disable no-unused-vars */
import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 
  const [amount,setAmount] =useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [result, setResult] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from) //useCurrencyInfo(currency = From)

  const options = Object.keys(currencyInfo) // to get the option list use the keys in the object return by hook

  const swap = {
    setFrom(to)
    setTo(from)
    setResult(amount)
    setAmount(result)
  }

  return (
    <>
      
    </>
  )
}

export default App
