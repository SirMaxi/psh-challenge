import React from 'react'
import '../scss/app.scss'
import { Provider } from 'react-redux'
import store from 'redux/store'
import ChatScreen from './ChatScreen/ChatScreen'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ChatScreen />
    </Provider>
  )
}

export default App
