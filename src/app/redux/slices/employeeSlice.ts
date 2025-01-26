import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchEmployees } from '@redux/actions/employeeActions'
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
