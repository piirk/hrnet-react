import { createAsyncThunk } from '@reduxjs/toolkit'
import { Employee } from '@common/models/Employee'

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async () => {
    // mock data
    const data: Employee[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: new Date('01-01-1990').toISOString(),
        startDate: new Date('01-01-2020').toISOString(),
        department: 'IT',
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701',
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        dateOfBirth: new Date('01-01-1990').toISOString(),
        startDate: new Date('01-01-2020').toISOString(),
        department: 'HR',
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701',
      },
    ]
    return data
  },
)
