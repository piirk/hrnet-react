import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '@common/components/Layout'
import { fetchEmployees } from '@redux/actions/employeeActions'
import { RootState, AppDispatch } from '@redux/store'
import { Employee } from '@common/models/Employee'
import { Typography } from '@mui/material'
import { DataTable } from 'react-datatable-library'
import { states } from '@constants/states'

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
    { title: 'First Name', dataIndex: 'firstName', sortable: true },
    { title: 'Last Name', dataIndex: 'lastName', sortable: true },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      render: (date: string) => new Date(date).toLocaleDateString(),
      sortable: true,
    },
    { title: 'Department', dataIndex: 'department', sortable: true },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      render: (date: string) => new Date(date).toLocaleDateString(),
      sortable: true,
    },
    { title: 'Street', dataIndex: 'street' },
    { title: 'City', dataIndex: 'city' },
    {
      title: 'State',
      dataIndex: 'state',
      render: (stateCode: string) => {
        return states[stateCode] || stateCode
      },
      sortable: true,
    },
    { title: 'Zip Code', dataIndex: 'zipCode' },
  ]

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <Layout>
      <Typography variant="h1" sx={{ fontSize: '3rem' }}>
        Current Employees
      </Typography>

      {/* dev */}
      <button onClick={handleToggleMUI}>
        {useMUI ? 'Switch to Non-MUI' : 'Switch to MUI'}
      </button>

      <DataTable
        data={employees}
        columns={columns}
        useMUI={useMUI}
        enableSearch={true}
      />
    </Layout>
  )
}

export default EmployeeListPage
