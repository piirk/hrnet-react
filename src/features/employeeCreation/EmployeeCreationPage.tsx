import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { states } from '@constants/states'
import Layout from '@common/components/Layout'
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Box,
  SelectChangeEvent,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

const EmployeeCreationPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [state, setState] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string)
  }

  const onSubmit = (data: any) => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]')
    employees.push(data)
    localStorage.setItem('employees', JSON.stringify(employees))

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
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
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

        <Box component="fieldset">
          <legend>Address</legend>

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

          <FormControl fullWidth error={!!errors.state}>
            <InputLabel>State</InputLabel>
            <Select
              {...register('state', { required: 'State is required' })}
              label="State"
              value={state}
              onChange={handleChange}
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
        </Box>

        <FormControl fullWidth>
          <InputLabel>Department</InputLabel>
          <Select {...register('department')} label="Department">
            <MenuItem>Sales</MenuItem>
            <MenuItem>Marketing</MenuItem>
            <MenuItem>Engineering</MenuItem>
            <MenuItem>Human Resources</MenuItem>
            <MenuItem>Legal</MenuItem>
          </Select>
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

      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </Layout>
  )
}

export default EmployeeCreationPage
