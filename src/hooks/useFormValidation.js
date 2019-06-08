import { useState, useEffect, useContext } from 'react'

import { LoggingContext } from './index'

export const useFormValidation = (
  initialValues,
  validation
  //authenticate
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  const { handleClose } = useContext(LoggingContext)

  useEffect(() => {
    if (isSubmitting) {
      const noErrors =
        !errors.email &&
        (!errors.password || errors.password.length === 0) &&
        !errors.confirmPassword
      if (noErrors) {
        //authenticate()
        console.log(values)
        console.log('Sending email and password to backend.')
        handleClose()
        setValues(initialValues)
        setSubmitting(false)
      }
    }
  }, [errors, isSubmitting])

  useEffect(() => {
    if (!values.password && !values.email && !values.confirmPassword) return
    const validationErrors = validation(values)
    setErrors(validationErrors)
  }, [values, validation])

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleBlur = () => {
    const validationErrors = validation(values)
    setErrors(validationErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!values.email || !values.password || !values.confirmPassword) return

    const validationErrors = validation(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    handleBlur
  }
}
