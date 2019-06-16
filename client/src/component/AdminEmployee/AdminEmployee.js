import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'

import { AddEmployeeModal, Loading } from '..'
import { getEmployees } from '../../redux/actions'

const Container = styled.div`
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
  flex: 1;
`

export class AdminEmployeeComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowModal: false,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.props.getEmployees()
  }

  showEmployeeModal = () => {
    this.setState({
      isShowModal: true,
    })
  }

  addEmployee = (data) => {
    this.setState({
      isLoading: true,
    })

    axios.post('/api/employees', data)
      .then((res) => {
        this.setState({
          isShowModal: false,
          isLoading: false,
        })
        this.props.getEmployees()
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
        })
        alert('Create Employee error')
        console.error(e)
      })
  }

  deleteEmp = (id) => {
    const r = confirm('Are you sure to Delete?')
    if (r === true) {
      this.setState({
        isLoading: true,
      })

      axios.delete(`/api/employees/${id}`)
        .then((res) => {
          this.props.getEmployees()
          this.setState({
            isLoading: false,
          })
        })
        .catch((e) => {
          alert('Delete Employee error')
          console.error(e)
          this.setState({
            isLoading: false,
          })
        })
    }
  }

  closeEmployeeModal = () => {
    this.setState({
      isShowModal: false,
    })
  }

  render() {
    const { isShowModal, isLoading } = this.state
    const { employees } = this.props

    return (
      <Container>
        <div>
          <button
            onClick={this.showEmployeeModal}
            className="button is-primary"
          >
Add

          </button>
        </div>
        <div className="list-box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name eeeeoaeoaeaoeaoeoaeao eeeeoaeoaeaoeaoeoaeao eeeeoaeoaeaoeaoeoaeao eeeeoaeoaeaoeaoeoaeao</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={`emp-${emp._id}`}>
                  <td>{emp.empId}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.position}</td>
                  <td>{emp.department}</td>
                  <td>
    <button
                      className="button is-danger"
                      onClick={() => this.deleteEmp(emp._id)}
                    >
Delete

                    </button>
  </td>
                                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isShowModal
          && (
          <AddEmployeeModal
  addEmployee={this.addEmployee}
  closeModal={this.closeEmployeeModal}
/>
          )
        }
        {isLoading && <Loading />}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
})

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees()),
})

export const AdminEmployee = connect(mapStateToProps, mapDispatchToProps)(AdminEmployeeComp)
