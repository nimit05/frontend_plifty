import {combineReducers} from 'redux'
import SignupReducers  from './reducers/signupReducers';
import LoginReducers from './reducers/loginReducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import ChatReducers from './reducers/chatsReducers';
import PlayersReducers from './reducers/playersReducers';
import SPecPlayersReducers from './reducers/specificPlayerReducer';
import MsgUserIdReducers from './reducers/messageUserId'; 
import ChatRoomReducers from './reducers/chatRoomReducers';

 const rootReducer = combineReducers({
    signup : SignupReducers,
    login : LoginReducers,
    chats : ChatReducers,
    players : PlayersReducers,
    specificPlayer : SPecPlayersReducers,
    msgUserIds : MsgUserIdReducers,
    chatRoom : ChatRoomReducers
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['login']
}

export default persistReducer(persistConfig , rootReducer);