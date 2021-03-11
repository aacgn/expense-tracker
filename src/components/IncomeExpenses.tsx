import React, { FC, useContext } from 'react';

import { GlobalContext } from '../contexts/GlobalState';

const IncomeExpenses: FC = () => {
    const { state } = useContext(GlobalContext);

    const incomeTotal = state && state.transactions ? 
        state.transactions
        .filter(transaction => transaction.amount > 0)
        .map(transaction => transaction.amount)
        .reduce((acc, amount) => (acc += amount), 0) 
        .toFixed(2)
        : 0;

    const expenseTotal = state && state.transactions ? 
        state.transactions
        .filter(transaction => transaction.amount < 0)
        .map(transaction => transaction.amount)
        .reduce((acc, amount) => (acc += amount), 0)
        * -1
        .toFixed(2)
        : 0;

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${incomeTotal}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expenseTotal}</p>
            </div>
      </div>
    )
};

export default IncomeExpenses;