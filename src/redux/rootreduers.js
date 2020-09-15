import {combineReducers} from 'redux'
import SignupReducers  from './reducers/signupReducers';
import LoginReducers from './reducers/loginReducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

 const rootReducer = combineReducers({
    signup : SignupReducers,
    login : LoginReducers
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['login']
}

export default persistReducer(persistConfig , rootReducer);