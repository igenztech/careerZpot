import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ color, star, label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={'wrap-input100 form-group validate-input m-b-26 row'}>
      <label className="label-input100 col-25" htmlFor={field.name}>
        {label}
        <span 
        // style={{ color: color }}
        >
          {star}{' '}
          {field.name === 'file' ? (
            <div className="tooltip" data-direction="left">
              <div className="tooltip__initiator">
                <i className="fa fa-info-circle"></i>
              </div>
              <div className="tooltiptext">
                Please select only .pdf .doc & .docx file and size less than 2MB
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </span>
      </label>
      <div className="col-75">
        <input
          className={`form-control input-field file-field shadow-none inputfield ${
            meta.touched && meta.error && 'is-invalid'
          }`}
          {...field}
          {...props}
          autoComplete="off"
          value={field.values}
        />
        <ErrorMessage component="div" name={field.name} className="error text-danger" />
      </div>
    </div>
  )
}
