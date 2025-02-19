import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import Routes from '../routes'
import { CssBaseline } from '@mui/material'

const App = () => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  )
}

export default App
