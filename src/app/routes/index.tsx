import { Route, Routes } from 'react-router-dom'
import HomePage from '@features/home/HomePage'
import Error404 from './Error404'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRoutes
