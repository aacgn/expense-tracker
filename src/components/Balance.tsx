import React, { FC, Fragment, useContext } from 'react';

import { GlobalContext } from '../contexts/GlobalState';

const Balance: FC = () => {
    const { state } = useContext(GlobalContext);

    const totalAmount = state && state.transactions ? 
        state.transactions
        .map(transaction => transaction.amount)
        .reduce((acc, amount) => (acc += amount), 0) 
        : 0;

    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1 id="balance">${totalAmount}</h1>
        </Fragment>
    )
};

export default Balance;