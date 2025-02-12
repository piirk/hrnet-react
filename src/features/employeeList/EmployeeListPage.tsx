import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '@common/components/AppLayout'
import { fetchEmployees } from '@redux/actions/employeeActions'
import { RootState, AppDispatch } from '@redux/store'
import { Employee } from '@common/models/Employee'
import { Typography } from 'antd'
import { DataTable } from 'react-datatable-library'
import { states } from '@constants/states'

const { Title } = Typography

const EmployeeListPage = () => {
  // dev
  const [useMUI, setUseMUI] = useState(true)
  const handleToggleMUI = () => {
    setUseMUI((prev) => !prev)
  }

  const dispatch: AppDispatch = useDispatch()
  const employees: Employee[] = useSelector(
    (state: RootState) => state.employee.employees,
  )

  const columns = [
    { title: 'First Name', dataIndex: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName' },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    { title: 'Department', dataIndex: 'department' },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    { title: 'Street', dataIndex: 'street' },
    { title: 'City', dataIndex: 'city' },
    {
      title: 'State',
      dataIndex: 'state',
      render: (stateCode: string) => {
        return states[stateCode] || stateCode
      },
    },
    { title: 'Zip Code', dataIndex: 'zipCode' },
  ]

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <AppLayout>
      <Title level={2}>Employees</Title>
      <button onClick={handleToggleMUI}>
        {useMUI ? 'Switch to Non-MUI' : 'Switch to MUI'}
      </button>
      <DataTable data={employees} columns={columns} useMUI={useMUI} />
    </AppLayout>
  )
}

export default EmployeeListPage
