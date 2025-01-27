import { Navigate, Route, Routes } from 'react-router-dom'
import EmployeeCreationPage from '@features/employeeCreation/EmployeeCreationPage'
import Error404 from './Error404'
import EmployeeListPage from '@features/employeeList/EmployeeListPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employee/create" />} />
      <Route path="/employee/create" element={<EmployeeCreationPage />} />
      <Route path="/employee/list" element={<EmployeeListPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRoutes
