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

  const swap = ()=> {
    setFrom(to)
    setTo(from)
    setResult(amount)
    setAmount(result)
  }
    
        const convert = () => {
        setResult(amount * currencyInfo[to])
    }

    const BackgroundImage = 'https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg'
  
    return (
        
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                 amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={result}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
