import { useEffect } from 'react'
import { states } from '@constants/states'

const HomePage = () => {
  useEffect(() => {
    const stateSelect = document.getElementById('state') as HTMLSelectElement
    states.forEach((state) => {
      const option = document.createElement('option')
      option.value = state.abbreviation
      option.text = state.name
      stateSelect.appendChild(option)
    })

    const dateOfBirth = document.getElementById(
      'date-of-birth',
    ) as HTMLInputElement
    const startDate = document.getElementById('start-date') as HTMLInputElement

    dateOfBirth.addEventListener('focus', () => {
      dateOfBirth.type = 'date'
    })
    startDate.addEventListener('focus', () => {
      startDate.type = 'date'
    })
  }, [])

  const saveEmployee = () => {
    const firstName = document.getElementById('first-name') as HTMLInputElement
    const lastName = document.getElementById('last-name') as HTMLInputElement
    const dateOfBirth = document.getElementById(
      'date-of-birth',
    ) as HTMLInputElement
    const startDate = document.getElementById('start-date') as HTMLInputElement
    const department = document.getElementById(
      'department',
    ) as HTMLSelectElement
    const street = document.getElementById('street') as HTMLInputElement
    const city = document.getElementById('city') as HTMLInputElement
    const state = document.getElementById('state') as HTMLSelectElement
    const zipCode = document.getElementById('zip-code') as HTMLInputElement

    const employees = JSON.parse(localStorage.getItem('employees') || '[]')
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    }
    employees.push(employee)
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
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button type="button" onClick={saveEmployee}>
          Save
        </button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  )
}

export default HomePage
