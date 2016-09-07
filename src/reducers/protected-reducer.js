import {
    REQUEST_MESSAGE,
    RECEIVE_MESSAGE
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type) {
        case REQUEST_MESSAGE:
            return { 
                ...state, 
                message: '',
                isFetching: true
            };
        case RECEIVE_MESSAGE:
            return { 
                ...state, 
                message: action.payload,
                isFetching: false
            };
    }

    return state;
}