import React from 'react'
import {Field, ErrorMessage} from 'formik'

export const InputField = props => {
    const {formik, name, type, placeholder, label } = props
  
    return (
      <>
        <fieldset>
          <legend>{label}</legend>
          <Field formik={formik} name={name} type={type} id={name} placeholder={placeholder} />
        </fieldset>
        {<ErrorMessage name={name}>
          {error => <div>{error}</div>}
        </ErrorMessage>}
      </>
    )
  }