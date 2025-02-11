import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '@common/components/AppLayout'
import { fetchEmployees } from '@redux/actions/employeeActions'
import { RootState, AppDispatch } from '@redux/store'
import { Employee } from '@common/models/Employee'
import { Typography } from 'antd'
import { DataTable } from 'react-datatable-library'

const { Title } = Typography

const EmployeeListPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const employees: Employee[] = useSelector(
    (state: RootState) => state.employee.employees,
  )

  const columns = [
    { title: 'First Name', dataIndex: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName' },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    { title: 'Department', dataIndex: 'department' },
  ]

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <AppLayout>
      <Title level={2}>Employees</Title>
      <DataTable data={employees} columns={columns} />
    </AppLayout>
  )
}

export default EmployeeListPage
