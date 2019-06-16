import mongoose from 'mongoose'
import faker from 'faker'
// import { employeesDummy } from '../data/employee'

const Employee = mongoose.model('employees')

export default (app) => {
  app.post('/api/employee/dummy', async (req, res) => {
    const employees = new Employee({
      empId: faker.random.number(9999999),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.name.jobTitle(),
      department: faker.commerce.department(),
    })

    try {
      await employees.save()
      res.json({ result: 'done' })
    } catch (err) {
      res.status(422).json(err)
    }
  })

  app.post('/api/employees', async (req, res) => {
    const empObject = req.body
    const employees = new Employee({
      ...empObject,
      empId: faker.random.number(9999999),
      created: Date.now(),
    })

    try {
      await employees.save()
      res.json({ result: 'done' })
    } catch (err) {
      res.status(422).json(err)
    }
  })

  app.get('/api/employees', async (req, res) => {
    const employees = await Employee.find().sort({ created: 'desc' })

    try {
      res.json({ result: employees })
    } catch (err) {
      res.status(422).json(err)
    }
  })

  app.delete('/api/employees/:id', async (req, res) => {
    try {
      await Employee.findByIdAndRemove(req.params.id)
      res.json({ result: 'done' })
    } catch (err) {
      res.status(422).json(err)
    }
  })
}
