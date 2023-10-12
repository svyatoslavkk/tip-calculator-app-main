import React, { useState } from "react";
import logo from '../logo.svg';
import iconPerson from '../icon-person.svg';
import iconDollar from '../icon-dollar.svg';

export default function MainPage () {

    const buttons = [
        {
            value: '5%',
        },
        {
            value: '10%',
        },
        {
            value: '15%',
        },
        {
            value: '20%',
        },
        {
            value: '50%',
        },
    ]

    return (
        <div className="container">
            <img src={logo} className="logo-header" alt="Logo" />
            <div className="content">
                <div className="options">
                    <div className="header">
                        <h4 className="section-title">Bill</h4>
                        <div className="input-container">
                            <img src={iconDollar} className="dollar-sign" alt="Icon Dollar" />
                            <input className="input-sum" placeholder="0" />
                        </div>
                    </div>
                    <div className="choose-percent">
                        <h4 className="section-title">Select Tip %</h4>
                        <div className="buttons">
                            {buttons.map((button: any) => (
                                <button>{button.value}</button>
                            ))}
                            <input className="input-percent" placeholder="Custom" />
                        </div>
                    </div>
                    <div className="number-of-people">
                        <h4 className="section-title">Number of people</h4>
                        <div className="input-container">
                            <img src={iconPerson} className="icon-person" alt="Icon Person" />
                            <input className="input-sum" placeholder="0" />
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
                                <h2>$0.00</h2>
                            </div>
                        </div>
                        <div className="total">
                            <div className="text">
                                <h4 className="result-block-title">Total</h4>
                                <p className="for-person-sign">/ person</p>
                            </div>
                            <div className="sum">
                                <h2>$0.00</h2>
                            </div>
                        </div>
                    </div>
                    <button className="reset-button">Reset</button>
                </div>
            </div>
        </div>
    )
}