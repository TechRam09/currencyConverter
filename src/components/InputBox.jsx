/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function InputBox({
    label,
    className = "",
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable =false, 
    currencyOptions =[],
    selectCurrency= 'usd',
    
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                   // the value will be taken as string so converted into number
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;