import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Employee } from '@common/models/Employee'

interface EmployeeState {
  employees: Employee[]
  loading: boolean
  error: string | undefined
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: undefined,
}

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async () => {
    // mock data
    const data: Employee[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: new Date('1990-01-01'),
        startDate: new Date('2020-01-01'),
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
        dateOfBirth: new Date('1995-01-01'),
        startDate: new Date('2020-01-01'),
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

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false
      state.employees = action.payload
    })
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
