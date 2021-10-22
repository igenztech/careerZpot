import * as Yup from "yup"
import React, { Fragment, useState, useRef } from "react"
import { ArrowLeft, ArrowRight, Plus, Trash } from "react-feather"
import {
  Label,
  FormGroup,
  Row,
  Col,
  Input,
  Button,
  CustomInput,
  Progress,
  DropdownMenu
} from "reactstrap"
import Repeater from "@components/repeater"
import Select from "react-select"
import "@styles/react/libs/react-select/_react-select.scss"
import { selectThemeColors } from "@utils"
import collegedata from "../Data.json"
import { Formik, Form, Field, ErrorMessage, useFormikContext, FieldArray } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { addeducation } from "../../store/action"
//import { value } from "dom7"
//import { error } from "jquery"

const formInitialValues = { college: "", coursetype: "", degree: "", passout: "" }
//const dispatch = useDispatch()
const collegeOptions = collegedata.Colleges.map((clgdata) => ({
  value: clgdata.value,
  label: clgdata.label
}))
 
const yearOptions = collegedata.years.map((yeardata) => ({
  value: yeardata.value,
  label: yeardata.label
}))

 const degreedata = collegedata.Degree.map((college) => ({
   value:college.value,
   label:college.label
 }))

 const coursetype = collegedata.CourseType.map((course) => ({
   value:course.value,
   label:course.label
 }))

 const validate = Yup.object({
  forms: Yup.array().of(
    Yup.object().shape({
      college: Yup.object().required("College required"),
      coursetype: Yup.object()
        .required("Coursetype required"),
        degree:Yup.object().required("Degree required")
    })
  )
})

const EducationalDetails = ({ stepper, type }, props) => {

  const dispatch = useDispatch()
 
  return (
  <Formik
  initialValues={{ forms: [formInitialValues] }}
  validationSchema={validate}
  validateOnBlur={true}
  validateOnChange={true}
  onSubmit={values => {
    console.log("Education", values)
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2))
    // }, 500)
   
    dispatch(addeducation(values))
  }}
  
  render={Formik, ({setFieldTouched, setFieldValue, values, errors, isValid, dirty }) => (
    <Form>
      <FieldArray
        name="forms"
        render={arrayHelpers => (
        
          <div>
              {console.log("ArrayHelper:", arrayHelpers)}
            {values.forms.map((formItem, index) => (
              <div key={index}>
                
                <Row>
                  <FormGroup tag={Col} md="6">
                      <Label className="form-label">
                        College/University
                        <span style={{ color: "red" }}>*</span>
                      </Label>
                      {console.log(JSON.stringify(values, null, 2))}
                      <Field as={Select}   onChange={value => setFieldValue(`forms.${index}.college`, value)} options={collegeOptions}  onBlur={() => setFieldTouched(`forms.${index}.college`, true)} name={`forms.${index}.college`} />
                      <ErrorMessage  name={`forms.${index}.college`} >{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                  </FormGroup>
                  <FormGroup tag={Col} md="6">
                      <Label className="form-label">
                        Course Type
                        <span style={{ color: "red" }}>*</span>
                      </Label>
                       <Field as={Select}   onChange={value => setFieldValue(`forms.${index}.coursetype`, value)} onBlur={() => setFieldTouched(`forms.${index}.coursetype`, true)} options={coursetype} name={`forms.${index}.coursetype`} />
                       <ErrorMessage  name={`forms.${index}.coursetype`} >{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                  </FormGroup>
                  </Row>
                  <Row>
                   <FormGroup tag={Col} md="6">
                      <Label className="form-label">
                        Degree
                        <span style={{ color: "red" }}>*</span>
                      </Label>
                     <Field as={Select}   onChange={value => setFieldValue(`forms.${index}.degree`, value)} onBlur={() => setFieldTouched(`forms.${index}.degree`, true)} options={degreedata} name={`forms.${index}.degree`} />
                     <ErrorMessage  name={`forms.${index}.degree`} >{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                    </FormGroup>
                   <FormGroup tag={Col} md="6">
                      <Label className="form-label">Year of Passout</Label>
                     <Field as={Select}   onChange={value => setFieldValue(`forms.${index}.passout`, value)} onBlur={() => setFieldTouched(`forms.${index}.passout`, true)} options={yearOptions} name={`forms.${index}.passout`} />
                     
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
                  } }// insert an empty string at a position
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
  
  )}
  />
  )
 }

export default EducationalDetails