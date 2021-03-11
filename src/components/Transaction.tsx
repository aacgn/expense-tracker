import React, { FC, useContext } from 'react';

import { GlobalContext } from '../contexts/GlobalState';

import { Transaction as TransactionModel } from '../models/Transaction';

interface TransactionProps {
    transation: TransactionModel
}

const Transaction: FC<TransactionProps> = ({ transation }) => {
    const { dispatch } = useContext(GlobalContext);

    const sign = transation.amount < 0 ? '-' : '+';

    return (
        <li className={transation.amount > 0 ? 'plus' : 'minus'}>
            {transation.text} <span>{sign}${Math.abs(transation.amount)}</span>
            <button className="delete-btn" onClick={() => dispatch.deleteTransaction(transation.id)}>x</button>
        </li>
    );
}

export default Transaction;