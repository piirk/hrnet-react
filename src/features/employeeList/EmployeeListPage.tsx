import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '@components/Layout'
import { fetchEmployees } from '@redux/actions/employeeActions'
import { RootState, AppDispatch } from '@redux/store'
import { Employee } from '@models/Employee'
import { Typography } from '@mui/material'
import { DataTable } from 'react-datatable-library'
import { states } from '@constants/states'

const EmployeeListPage = () => {
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
    <Layout>
      <Typography variant="h1" sx={{ fontSize: '3rem' }}>
        Current Employees
      </Typography>

      <DataTable
        data={employees}
        columns={columns}
        sx={{
          container: {
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            mt: '20px',
          },
          search: { marginBottom: '20px' },
          table: { border: '1px solid black' },
          header: { backgroundColor: 'lightblue' },
          body: { backgroundColor: 'lightgrey' },
          row: { '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } },
          cell: { padding: '10px' },
          pagination: { marginTop: '20px' },
        }}
      />
    </Layout>
  )
}

export default EmployeeListPage
