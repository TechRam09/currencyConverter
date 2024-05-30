/* eslint-disable no-unused-vars */
import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 
  const [amount,setAmount] =useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [result, setReseult] = useState(0)
  
  return (
    <>
      
    </>
  )
}

export default App
