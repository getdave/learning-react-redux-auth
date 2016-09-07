import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import protectedReducer from './protected-reducer';

const rootReducer = combineReducers({
	form: formReducer,
    auth: authReducer,
    protected: protectedReducer
});

export default rootReducer;
