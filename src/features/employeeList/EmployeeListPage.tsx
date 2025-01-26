import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '@common/components/AppLayout'
import { fetchEmployees } from '@redux/slices/employeeSlice'
import { RootState, AppDispatch } from '@redux/store'
import { Employee } from '@common/models/Employee'
import { Typography } from 'antd'

const { Title } = Typography

const EmployeeListPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const employees: Employee[] = useSelector(
    (state: RootState) => state.employee.employees,
  )

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <AppLayout>
      <Title level={2}>Employees</Title>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.firstName}</li>
        ))}
      </ul>
    </AppLayout>
  )
}

export default EmployeeListPage
