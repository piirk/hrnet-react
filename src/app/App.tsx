import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import Routes from './routes'
import './App.scss'

const App = () => {
  const dispatch: AppDispatch = useDispatch()

  return <Routes />
}

export default App
