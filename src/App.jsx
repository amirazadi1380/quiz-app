import { Provider, useSelector } from 'react-redux'
import store from './Store'
import Home from './Home'
function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
