import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import App from './app/App'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <App />
        </Router>
      </LocalizationProvider>
    </Provider>,
  )
} else {
  console.error('Failed to find the root element')
}
