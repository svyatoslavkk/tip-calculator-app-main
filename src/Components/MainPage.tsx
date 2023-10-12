import React, { useState } from "react";
import { ResetButton } from "./ResetButton";
import logo from '../logo.svg';
import iconPerson from '../icon-person.svg';
import iconDollar from '../icon-dollar.svg';

export default function MainPage () {
    const [billAmount, setBillAmount] = useState(0); 
    const [tipPercentage, setTipPercentage] = useState(0); 
    const [numberOfPeople, setNumberOfPeople] = useState(1); 

    const buttons = [
        {
            value: '5',
        },
        {
            value: '10',
        },
        {
            value: '15',
        },
        {
            value: '20',
        },
        {
            value: '50',
        },
    ]

    const handleBillAmountChange = (e: any) => {
        setBillAmount(parseFloat(e.target.value) || 0);
    };

    const calculateTip = () => {
        return billAmount * (tipPercentage / 100) * numberOfPeople;
    };
      
    const handleTipPercentageSelect = (percentage: any) => {
        setTipPercentage(percentage);
    };
      
    const handleNumberOfPeopleChange = (e: any) => {
        setNumberOfPeople(parseInt(e.target.value) || 1);
    };

    const handleReset = () => {
        setBillAmount(0);
        setTipPercentage(0);
        setNumberOfPeople(1);
    };

    return (
        <div className="container">
            <img src={logo} className="logo-header" alt="Logo" />
            <div className="content">
                <div className="options">
                    <div className="header">
                        <h4 className="section-title">Bill</h4>
                        <div className="input-container">
                            <img src={iconDollar} className="dollar-sign" alt="Icon Dollar" />
                            <input 
                                className="input-sum" 
                                placeholder="0" 
                                value={billAmount}
                                onChange={handleBillAmountChange}
                            />
                        </div>
                    </div>
                    <div className="choose-percent">
                        <h4 className="section-title">Select Tip %</h4>
                        <div className="buttons">
                            {buttons.map((button: any) => (
                                <button
                                onClick={() => handleTipPercentageSelect(parseInt(button.value))}
                                >
                                {button.value}%
                                </button>
                            ))}
                            <input 
                                className="input-percent" 
                                placeholder="Custom" 
                                onChange={(e) => handleTipPercentageSelect(parseFloat(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="number-of-people">
                        <h4 className="section-title">Number of people</h4>
                        <div className="input-container">
                            <img src={iconPerson} className="icon-person" alt="Icon Person" />
                            <input
                                className="input-sum"
                                placeholder="0"
                                value={numberOfPeople}
                                onChange={handleNumberOfPeopleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="result-block">
                    <div>
                        <div className="tip-amount">
                            <div className="text">
                                <h4 className="result-block-title">Tip Amount</h4>
                                <p className="for-person-sign">/ person</p>
                            </div>
                            <div className="sum">
                                <h2>${calculateTip().toFixed(2)}</h2>
                            </div>
                        </div>
                        <div className="total">
                            <div className="text">
                                <h4 className="result-block-title">Total</h4>
                                <p className="for-person-sign">/ person</p>
                            </div>
                            <div className="sum">
                                <h2>${(billAmount + calculateTip()).toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>
                    <ResetButton onClick={handleReset}>Reset</ResetButton>
                </div>
            </div>
        </div>
    )
}