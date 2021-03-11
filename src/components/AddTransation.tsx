import React, { FC, FormEvent, Fragment, useContext, useState } from 'react';

import { GlobalContext } from '../contexts/GlobalState';

const AddTransaction: FC = () => {
    const { dispatch } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch.addTransaction(text, amount)
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(+e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
};

export default AddTransaction;