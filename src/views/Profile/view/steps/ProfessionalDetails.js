import { Fragment, useState } from "react"
import * as Yup from "yup"
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  MoreVertical,
  Edit,
  Trash,
  X
} from "react-feather"
import { useDispatch, useSelector } from "react-redux"
//import { addprofession } from "../../store/action"
import {
  Label,
  FormGroup,
  Row,
  Col,
  Button,
  CustomInput,
  Progress
} from "reactstrap"
import Repeater from "@components/repeater"
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik"
import Select from "react-select"
import "@styles/react/libs/react-select/_react-select.scss"
import { selectThemeColors } from "@utils"
import companydata from "../Data.json"
import { addprofession } from "../../store/action"

// const professionalDetails = useSelector(
//   state => state.candidate.professionalDetails
// )

const formInitialValues = {
  organization: "",
  designation: "",
  salary: "",
  yearofexp: ""
}
const organizationOptions = companydata.companies.map(compnydata => ({
  value: compnydata.value,
  label: compnydata.label
}))
const designationOptions = companydata.designation.map(designationdata => ({
  value: designationdata.value,
  label: designationdata.label
}))
const salaryOptions = companydata.salary.map(salarydata => ({
  value: salarydata.value,
  label: salarydata.label
}))
const yearofexpOptions = companydata.yearofexp.map(yearofexpdata => ({
  value: yearofexpdata.value,
  label: yearofexpdata.label
}))

const validate = Yup.object({
  forms: Yup.array().of(
    Yup.object().shape({
      organization: Yup.object().required("Organization required"),
      designation: Yup.object().required("Designation required"),
      salary: Yup.object().required("Salary required"),
      yearofexp: Yup.object().required("Year of experience required")
    })
  )
})

const ProfessionalDetails = ({ stepper, type }) => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{ forms: [formInitialValues] }}
      validationSchema={validate}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={values => {
        //console.log(values)
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2))
        // }, 500)
        dispatch(addprofession(values))
      }}
      render={
        (Formik,
        ({
          setFieldTouched,
          setFieldValue,
          values,
          errors,
          isValid,
          dirty
        }) => (
          <Form>
            <FieldArray
              name="forms"
              render={arrayHelpers => (
                <div>
                  {values.forms.map((formItem, index) => (
                    <div key={index}>
                      <Row>
                        <FormGroup tag={Col} md="6">
                          <Label className="form-label">
                            Organization
                            <span style={{ color: "red" }}>*</span>
                          </Label>
                          {console.log(JSON.stringify(values, null, 2))}
                          <Field
                            as={Select}
                            onChange={value => {
                              setFieldValue(
                                `forms.${index}.organization`,
                                value
                              )
                            }}
                            options={organizationOptions}
                            onBlur={() => {
                              setFieldTouched(
                                `forms.${index}.organization`,
                                true
                              )
                            }}
                            name={`forms.${index}.organization`}
                          />
                          <ErrorMessage name={`forms.${index}.organization`}>
                            {msg => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </FormGroup>
                        <FormGroup tag={Col} md="6">
                          <Label className="form-label">
                            designation
                            <span style={{ color: "red" }}>*</span>
                          </Label>
                          <Field
                            as={Select}
                            onChange={value => {
                              setFieldValue(`forms.${index}.designation`, value)
                            }}
                            onBlur={() => {
                              setFieldTouched(
                                `forms.${index}.designation`,
                                true
                              )
                            }}
                            options={designationOptions}
                            name={`forms.${index}.designation`}
                          />
                          <ErrorMessage name={`forms.${index}.designation`}>
                            {msg => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup tag={Col} md="6">
                          <Label className="form-label">
                            Salary
                            <span style={{ color: "red" }}>*</span>
                          </Label>
                          <Field
                            as={Select}
                            onChange={value => {
                              setFieldValue(`forms.${index}.salary`, value)
                            }}
                            onBlur={() => {
                              setFieldTouched(`forms.${index}.salary`, true)
                            }}
                            options={salaryOptions}
                            name={`forms.${index}.salary`}
                          />
                          <ErrorMessage name={`forms.${index}.salary`}>
                            {msg => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </FormGroup>
                        <FormGroup tag={Col} md="6">
                          <Label className="form-label">
                            Year of Experience
                            <span style={{ color: "red" }}>*</span>
                          </Label>
                          <Field
                            as={Select}
                            onChange={value => {
                              setFieldValue(`forms.${index}.yearofexp`, value)
                            }}
                            onBlur={() => {
                              setFieldTouched(`forms.${index}.yearofexp`, true)
                            }}
                            options={yearofexpOptions}
                            name={`forms.${index}.yearofexp`}
                          />
                          <ErrorMessage name={`forms.${index}.yearofexp`}>
                            {msg => <div style={{ color: "red" }}>{msg}</div>}
                          </ErrorMessage>
                        </FormGroup>
                      </Row>
                      <Trash
                        size={20}
                        style={{ color: "#ff4a4a" }}
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a form from the list of forms
                      >
                        -
                      </Trash>
                      <Plus
                        size={20}
                        style={{ color: "#ff4a4a" }}
                        type="button"
                        onClick={() => {
                          arrayHelpers.insert(index, formInitialValues)
                        }} // insert an empty string at a position
                      >
                        +
                      </Plus>
                    </div>
                  ))}
                  {/* <div>
                <button type="submit">Submit</button>
              </div> */}
                </div>
              )}
            />
            {/* <h1>Hello</h1> */}
            <div className="d-flex justify-content-between mt-2">
              <Button.Ripple
                color="primary"
                className="btn-prev"
                onClick={() => stepper.previous()}
              >
                <ArrowLeft
                  size={14}
                  className="align-middle mr-sm-25 mr-0"
                ></ArrowLeft>
                <span className="align-middle d-sm-inline-block d-none">
                  Previous
                </span>
              </Button.Ripple>
              <Button.Ripple
                color="primary"
                className="btn-next"
                type="submit"
                // disabled={!(isValid && dirty)}
                onClick={() => stepper.next()}
              >
                <span className="align-middle d-sm-inline-block d-none">
                  Next
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ml-sm-25 ml-0"
                ></ArrowRight>
              </Button.Ripple>
            </div>
          </Form>
        ))
      }
    />
  )
}

export default ProfessionalDetails