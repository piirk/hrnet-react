import { createAsyncThunk } from '@reduxjs/toolkit'
import { Employee } from '@models/Employee'

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async () => {
    const response = await fetch('http://localhost:5000/employees')
    const data = await response.json()
    return data as Employee[]
  },
)

export const addEmployee = createAsyncThunk(
  'employee/addEmployee',
  async (employee: Employee, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      })

      if (!response.ok) {
        throw new Error('Failed to add employee')
      }

      const newEmployee = await response.json()
      return newEmployee
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  },
)
