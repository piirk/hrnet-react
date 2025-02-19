import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchEmployees, addEmployee } from '@redux/actions/employeeActions'
import { Employee } from '@models/Employee'

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
  reducers: {},
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
    builder.addCase(addEmployee.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      addEmployee.fulfilled,
      (state, action: PayloadAction<Employee>) => {
        state.loading = false
        state.employees.push(action.payload)
      },
    )
    builder.addCase(addEmployee.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})

export default employeeSlice.reducer
