import { combineReducers } from 'redux'
import chatReducer from 'redux/reducer/chat.reducer'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  chat: chatReducer,
})

export default rootReducer
