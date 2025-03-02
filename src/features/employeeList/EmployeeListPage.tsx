import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '@components/Layout'
import { fetchEmployees } from '@redux/actions/employeeActions'
import { RootState, AppDispatch } from '@redux/store'
import { Employee } from '@models/Employee'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { states } from '@constants/states'

const DataTable = lazy(() =>
  import('react-datatable-library').then((module) => ({
    default: module.DataTable,
  })),
)

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

      <Suspense
        fallback={
          <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
        }
      >
        <DataTable
          data={employees}
          columns={columns}
          sx={{
            container: {
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              mt: '20px',
              minHeight: 650,
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
      </Suspense>
    </Layout>
  )
}

export default EmployeeListPage
