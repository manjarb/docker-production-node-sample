import mongoose, { Schema } from 'mongoose'

const employeeSchema = new Schema({
  empId: {
    type: Number,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
  },
  department: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
})


employeeSchema.index(
  {
    firstName: 1,
    lastName: 1,
    position: 1,
    department: 1,
    created: 1,
  }, {
    name: 'employeeFieldIndex',
  },
)

mongoose.model('employees', employeeSchema)
