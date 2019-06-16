import React from 'react'
import { Formik } from 'formik'

export class AddEmployeeModal extends React.Component {

  formSubmit = (values, actions) => {
    values['empId'] = '11321545';
    this.props.addEmployee(values)
    /*actions.resetForm({
      firstName: '',
      lastName: '',
      position: '',
      department: '',
    })
    actions.setSubmitting(false)*/
  }

  formValidate = (values) => {
    const requiredText = 'Required'

    const errors = {};
    if (!values.firstName) {
      errors.firstName = requiredText
    }

    if (!values.lastName) {
      errors.lastName = requiredText
    }

    if (!values.position) {
      errors.position = requiredText
    }

    if (!values.department) {
      errors.department = requiredText
    }

    return errors;
  }

  returnDangerClass = status => (status ? 'is-danger' : '');

  render() {
    const { closeModal } = this.props

    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          position: '',
          department: ''
        }}
        validate={this.formValidate}
        onSubmit={this.formSubmit}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => (
            <div className="modal is-active">
              <div className="modal-background" />
              <div className="modal-card">
                <form onSubmit={handleSubmit}>
                  <section className="modal-card-body">

                      <div className="columns">

                        <div className="column is-6">
                          <div className="field">
                            <label className="label">
                              First Name
                            </label>
                            <div className="control">
                              <input className={`input ${this.returnDangerClass(errors.firstName && touched.firstName)}`}
                                     type="text"
                                     name="firstName"
                                     onChange={handleChange}
                                     value={values.firstName}
                                     placeholder="First Name" />

                              <p className="help is-danger">
                                {(errors.firstName && touched.firstName) && errors.firstName}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="column is-6">
                          <div className="field">
                            <label className="label">
                              Last Name
                            </label>
                            <div className="control">
                              <input className={`input ${this.returnDangerClass(errors.lastName && touched.lastName)}`}
                                     type="text"
                                     name="lastName"
                                     onChange={handleChange}
                                     value={values.lastName}
                                     placeholder="Last Name" />

                              <p className="help is-danger">
                                {(errors.lastName && touched.lastName) && errors.lastName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-6">
                          <div className="field">
                            <label className="label">
                              Position
                            </label>
                            <div className="control">
                              <input className={`input ${this.returnDangerClass(errors.position && touched.position)}`}
                                     type="text"
                                     name="position"
                                     onChange={handleChange}
                                     value={values.position}
                                     placeholder="Position" />

                              <p className="help is-danger">
                                {(errors.position && touched.position) && errors.position}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="column is-6">
                          <div className="field">
                            <label className="label">
                              Department
                            </label>
                            <div className="control">
                              <input className={`input ${this.returnDangerClass(errors.department && touched.department)}`}
                                     type="text"
                                     name="department"
                                     onChange={handleChange}
                                     value={values.department}
                                     placeholder="department" />

                              <p className="help is-danger">
                                {(errors.department && touched.department) && errors.department}
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                  </section>

                  <footer className="modal-card-foot">
                    <button className="modal-close is-large"
                            aria-label="close"
                            onClick={closeModal} />
                    <button className="button is-primary"
                            type="submit"
                            disabled={isSubmitting}>
                      Add
                    </button>
                    <button className="button is-danger"
                            type="button"
                            onClick={closeModal}
                            disabled={isSubmitting}>
                      Close
                    </button>
                  </footer>
                </form>
              </div>

            </div>
          )}
      </Formik>
    )
  }
}