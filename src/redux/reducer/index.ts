import { combineReducers } from 'redux'
import chatReducer from 'redux/reducer/chat.reducer'

const rootReducer = combineReducers({
  chat: chatReducer,
})

export default rootReducer
