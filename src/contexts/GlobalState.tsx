import React, { createContext, FC, ReactNode, useReducer } from 'react';

import { Transaction } from '../models/Transaction';

interface GlobalState {
    transactions: Transaction[];
}

interface GlobalStateProps {
    children: ReactNode;
}

interface ContextProps {
    state: GlobalState;
    dispatch: {
        deleteTransaction: (id: number) => void;
        addTransaction: (text: string, amount: number) => void;
    };
}

interface GlobalAction {
    type: string;
    payload: any;
}

enum GlobalActionType {
    DELETE_TRANSACTION = 'DELETE_TRANSACTION',
    ADD_TRANSACTION = 'ADD_TRANSACTION'
}

const AppReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch(action.type) {
        case GlobalActionType.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case GlobalActionType.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

const initialState: GlobalState = {
    transactions: [
        new Transaction('Flower', -20),
        new Transaction('Salary', 300),
        new Transaction('Book', -10),
        new Transaction('Camera', 150)
    ]
}

export const GlobalContext = createContext({} as ContextProps);

const GlobalProvider: FC<GlobalStateProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id: number) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    };

    const addTransaction = (text: string, amount: number) => {
        const newTransaction = new Transaction(text, amount);

        dispatch({
            type: 'ADD_TRANSACTION',
            payload:newTransaction
        });
    }
   
    return (
        <GlobalContext.Provider value={{ state: state, dispatch: { deleteTransaction, addTransaction } }}>
            { children }
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;