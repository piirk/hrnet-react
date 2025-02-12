import { createAsyncThunk } from '@reduxjs/toolkit'
import { Employee } from '@common/models/Employee'

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async () => {
    const response = await fetch('http://localhost:5000/employees')
    const data = await response.json()
    return data as Employee[]
  },
)
