import { Route, Routes } from 'react-router-dom'
import EmployeeCreationPage from '@features/employeeCreation/EmployeeCreationPage'
import Error404 from './Error404'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeCreationPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRoutes
