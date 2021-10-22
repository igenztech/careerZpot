import * as Yup from "yup"
import React, { Fragment, useState } from "react"
import Select from "react-select"
import { selectThemeColors } from '@utils'
import { ArrowDownCircle, ArrowLeft, ChevronDown, RotateCw, X } from "react-feather"
// import Breadcrumbs from '@components/breadcrumbs'
// import CardAction from '@components/card-actions'
import { Label, FormGroup, Row, Col, Input, Button, Progress, CardBody, CardText, Table } from "reactstrap"
import { Formik, Form, Field, ErrorMessage } from "formik"
import "react-datepicker/dist/react-datepicker.css"
import Swal from "sweetalert2"
import "@styles/react/libs/react-select/_react-select.scss"
import withReactContent from "sweetalert2-react-content"
import skilldata from "../Data.json"
import { useDispatch, useSelector } from "react-redux"
import { addskill } from "../../store/action"

const Skills = ({ stepper, type }, props) => {
  const skillsOptions = skilldata.skills.map((skill) => ({
    value: skill.value,
    label: skill.label
  }))

  const groupedOptions = [
    {
      label: 'Ice Creams',
      options: [
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'Dark Chocolate', label: 'Dark Chocolate' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'salted-caramel', label: 'Salted Caramel' }
      ]
    }
  ]

  const dispatch = useDispatch()

  const skillDetails = useSelector((state) => state.candidate.skillDetails)


  const validate = Yup.object().shape({
    skill: Yup.array()
      .min(3, "Select Min 3 skills")
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required()
        })
      )
      .required("Skill  is required.")
  })
  const MySwal = withReactContent(Swal)

  const handleConfirmCancel = () => {
    return MySwal.fire({
      title: "Are you sure?",
      text: "You want to submit this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ml-1"
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Your file has been submitted.",
          customClass: {
            confirmButton: "btn btn-success"
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe!",
          icon: "error",
          customClass: {
            confirmButton: "btn btn-success"
          }
        })
      }
    })
  }


  return (
    <Fragment>
      <div className="demo-vertical-spacing mb-1">
        <Progress animated striped value="95" />
      </div>
      <div className="content-header">
        <h5 className="mb-0">Skill Info</h5>
      </div>
      <Formik
        initialValues={{ skill: "" }}
        initialTouched={{
          field: true
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={validate}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          // console.log(values.designation)
          dispatch(addskill(values))
          setSubmitting(false)
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Row>
              <FormGroup tag={Col} md="6">
                <Label className="form-label">Skills</Label>
                <Select
                  name="skill"
                  placeholder="Skills"
                  value={props.values.skill}
                  onChange={(selectedOption) => {
                    // This inline function can now completely be reaplce by handleChange("year")
                    props.setFieldValue("skill", selectedOption)
                  }}
                  isMulti
                  isClearable={true}
                  isSearchable={true}
                  options={skillsOptions}
                  onBlur={(e) => {
                    props.handleBlur(e)
                    props.setFieldTouched("skill", true, false)
                  }}
                />
                {props.errors.skill && props.touched.skill ? (
                  <div className="text-danger">{props.errors.skill}</div>
                ) : null}
              </FormGroup>

            </Row>
            <Row md='12'>
              <div >
                <CardBody className='pt-0'>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th>Skills</th>
                        <th>Proficiency</th>
                        <th>Certificate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Photoshop</td>
                        <td className='text-center'>
                          <ChevronDown className='collapse-icon' size={15} className='cursor-pointer'>
                            {/* <Select
                              type="select"
                              name="proficiency"
                              placeholder="select"
                              isClearable={false}
                              theme={selectThemeColors}
                              // defaultValue={colorOptions[1]}
                              options={groupedOptions}
                              className='react-select'
                              classNamePrefix='select'
                            /> */}
                            {/* <DropDown
                              options={[
                                { label: "Basic", value: "Basic" },
                                { label: "Intermediate", value: "Intermediate" },
                                { label: "Professional", value: "Professional" }
                              ]}
                              title={"Select Proficiency"}
                              selectedValue={initialValue}
                              onItemClick={onItemClick}
                            /> */}
                          </ChevronDown>
                        </td>
                        <td className='text-center'>
                          <ArrowDownCircle size={15} className='cursor-pointer' />

                        </td>
                      </tr>
                      <tr>
                        <td>AWS</td>
                        <td className='text-center'>
                          <ChevronDown className='collapse-icon' size={15} />
                        </td>
                        <td className='text-center'>
                          <ArrowDownCircle size={15} />
                        </td>
                      </tr>
                      <tr>
                        <td>React JS</td>
                        <td className='text-center'>
                          <ChevronDown className='collapse-icon' size={15} />
                        </td>
                        <td className='text-center'>
                          <ArrowDownCircle size={15} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </div>
            </Row>
            <br />

            <div className="d-flex justify-content-between">
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
                type="submit"
                color="success"
                className="btn-submit"
                disabled={!(props.isValid && props.dirty)}
                onClick={handleConfirmCancel}
                outline
              >
                Submit
              </Button.Ripple>
            </div>
          </Form>
        )}
      </Formik>

      {/* </CardAction>
        </Col>
      </Row> */}
    </Fragment>
  )
}

export default Skills
