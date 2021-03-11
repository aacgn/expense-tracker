import React, { FC, Fragment, useContext } from 'react';

import Transaction from './Transaction';

import { GlobalContext } from '../contexts/GlobalState';

const TransactionList: FC = () => {
    const { state } = useContext(GlobalContext);

    return (
        <Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    !!state && state.transactions.map(
                        (transaction) => {
                            return (
                                <Transaction key={transaction.id} transation={transaction} />
                            )
                        }
                    )
                }
            </ul>
        </Fragment>
    )
};

export default TransactionList;