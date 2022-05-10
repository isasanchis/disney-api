import { useContext } from 'react';

type State = {
    character: []
};
  
type Action = {
    type: string;
    payload: any;
};

const Reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_CHARACTER":
            return {
                ...state, character: action.payload
            };
        case "SET_PAGE":
            return {
                ...state, page: action.payload
            };
    };
};