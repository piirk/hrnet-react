import { Route, Routes } from 'react-router-dom'
import HomePage from '@features/home/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default AppRoutes
