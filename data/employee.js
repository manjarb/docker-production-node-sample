import faker from 'faker'

const employeesDummy = []

for (let i = 0; i < 20; i += 1) {
  employeesDummy.push({
    id: i,
    empId: faker.random.number(9999999),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    position: faker.name.jobTitle(),
    department: faker.commerce.department(),
  })
}

export { employeesDummy }
