import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { addEmployee } from '@redux/actions/employeeActions'
import { AppDispatch } from '@redux/store'
import { states } from '@constants/states'
import Layout from '@components/Layout'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { SelectChangeEvent } from '@mui/material/Select'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { Employee } from '@models/Employee'

interface EmployeeFormInput {
  firstName: string
  lastName: string
  dateOfBirth: Date
  startDate: Date
  department: string
  street: string
  city: string
  state: string
  zipCode: string
}

const EmployeeCreationPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmployeeFormInput>()

  const [state, setState] = useState('')
  const [department, setDepartment] = useState('')

  const handleStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string)
  }

  const handleDepartmentChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string)
  }

  const onSubmit: SubmitHandler<EmployeeFormInput> = (data) => {
    const formattedData: Omit<Employee, 'id'> = {
      ...data,
      dateOfBirth: data.dateOfBirth.toISOString(),
      startDate: data.startDate.toISOString(),
    }

    dispatch(addEmployee(formattedData))

    const confirmation = document.getElementById(
      'confirmation',
    ) as HTMLDivElement
    confirmation.style.display = 'block'
    setTimeout(() => {
      confirmation.style.display = 'none'
    }, 3000)
  }

  return (
    <Layout>
      <Typography variant="h1" sx={{ fontSize: '3rem' }}>
        Create Employee
      </Typography>

      {/* Employee Form */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          margin: 'auto',
          marginTop: '20px',
          width: {
            xs: '28ch',
            sm: '40ch',
            md: '50ch',
          },
        }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <Divider>Personal Information</Divider>
        <FormControl fullWidth error={!!errors.firstName}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            {...register('firstName', { required: 'First name is required' })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message?.toString() || ''}
          />
        </FormControl>

        <FormControl fullWidth error={!!errors.lastName}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            {...register('lastName', { required: 'Last name is required' })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message?.toString() || ''}
          />
        </FormControl>

        <FormControl fullWidth error={!!errors.dateOfBirth}>
          <Controller
            name="dateOfBirth"
            control={control}
            rules={{ required: 'Date of birth is required' }}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Date of Birth"
                format="DD/MM/YYYY"
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => field.onChange(date ? date.toDate() : null)}
                slotProps={{
                  textField: {
                    variant: 'outlined',
                    error: !!errors.dateOfBirth,
                    fullWidth: true,
                    helperText: errors.dateOfBirth?.message?.toString() || '',
                  },
                }}
              />
            )}
          />
        </FormControl>

        <Divider>Employment</Divider>
        <FormControl fullWidth error={!!errors.startDate}>
          <Controller
            name="startDate"
            control={control}
            rules={{ required: 'Start date is required' }}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Start Date"
                format="DD/MM/YYYY"
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => field.onChange(date ? date.toDate() : null)}
                slotProps={{
                  textField: {
                    variant: 'outlined',
                    error: !!errors.startDate,
                    fullWidth: true,
                    helperText: errors.startDate?.message?.toString() || '',
                  },
                }}
              />
            )}
          />
        </FormControl>

        <FormControl error={!!errors.department}>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            {...register('department', { required: 'Department is required' })}
            label="Department"
            value={department}
            onChange={handleDepartmentChange}
            fullWidth
          >
            <MenuItem value={'Sales'}>Sales</MenuItem>
            <MenuItem value={'Marketing'}>Marketing</MenuItem>
            <MenuItem value={'Engineering'}>Engineering</MenuItem>
            <MenuItem value={'Human Resources'}>Human Resources</MenuItem>
            <MenuItem value={'Legal'}>Legal</MenuItem>
          </Select>
          <FormHelperText>
            {errors.department?.message?.toString() || ''}
          </FormHelperText>
        </FormControl>

        <Divider>Address</Divider>

        <FormControl fullWidth error={!!errors.street}>
          <TextField
            label="Street"
            variant="outlined"
            fullWidth
            {...register('street', { required: 'Street is required' })}
            error={!!errors.street}
            helperText={errors.street?.message?.toString() || ''}
          />
        </FormControl>

        <FormControl fullWidth error={!!errors.city}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            {...register('city', { required: 'City is required' })}
            error={!!errors.city}
            helperText={errors.city?.message?.toString() || ''}
          />
        </FormControl>

        <FormControl error={!!errors.state}>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            {...register('state', { required: 'State is required' })}
            label="State"
            value={state}
            onChange={handleStateChange}
            fullWidth
          >
            {Object.entries(states).map(([abbreviation, name]) => (
              <MenuItem key={abbreviation} value={abbreviation}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {errors.state?.message?.toString() || ''}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth error={!!errors.zipCode}>
          <TextField
            label="Zip Code"
            variant="outlined"
            type="number"
            fullWidth
            {...register('zipCode', { required: 'Zip code is required' })}
            error={!!errors.zipCode}
            helperText={errors.zipCode?.message?.toString() || ''}
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>

      {/* Confirmation Dialog */}
      <Box
        id="confirmation"
        sx={{
          display: 'none',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          zIndex: 1300,
        }}
      >
        <Typography variant="h6" component="h2">
          Employee Created!
        </Typography>
      </Box>
    </Layout>
  )
}

export default EmployeeCreationPage
