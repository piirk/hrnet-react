import { Navigate, Route, Routes } from 'react-router-dom'
import EmployeeCreationPage from '@features/employeeCreation/EmployeeCreationPage'
import PageNotFound from './PageNotFound'
import EmployeeListPage from '@features/employeeList/EmployeeListPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employee/create" />} />
      <Route path="/employee/create" element={<EmployeeCreationPage />} />
      <Route path="/employee/list" element={<EmployeeListPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
