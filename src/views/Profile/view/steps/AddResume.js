import { Fragment, useEffect, useState } from "react"
import { ArrowRight } from "react-feather"
import {
  Label,
  FormGroup,
  Row,
  Col,
  Button,
  CustomInput,
  Progress
} from "reactstrap"
import { useForm } from "react-hook-form"
import { Formik, Form, ErrorMessage } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { AvForm, AvGroup } from "availity-reactstrap-validation-safe"
import { TextField } from "../../../common/textField"
import { requestApiData } from "../../store/action"
const AddResume = ({ stepper, type }) => {
  // useEffect(() => {
  //   requestApiData()
  // }, [])

  // const handleSubmit = e => {
  //   console.log("123")
  //   e.preventDefault()
  //   requestApiData()
  // }
  const dispatch = useDispatch()
  const FILE_SIZE = 2000000
  const SUPPORTED_FORMATS = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ]
  const validate = Yup.object().shape({
    file: Yup.mixed()
      .nullable()
      .test(
        "FILE_FORMAT",
        "Please select only .pdf .doc & .docx file.",
        value => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      )
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        value => !value || (value && value.size <= FILE_SIZE)
      )
      .required("File is Required")
  })
  return (
    <Fragment>
      <div className="demo-vertical-spacing mb-1">
        <div>
          {/* <span>Reticulating splines… 25%</span> */}
          <Progress value="10" />
        </div>
      </div>
      <Formik
        initialValues={{ file: "", data: {} }}
        initialTouched={{
          field: true
        }}
        validateOnChange={true}
        validationSchema={validate}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const bodyFormData = new FormData()
          bodyFormData.append("file", values.file)
          // console.log(bodyFormData)
          // console.log(values.file)
          // console.log(values.file.name)
          // setTimeout(() => {
          // alert(JSON.stringify(values, null, 2))
          const { file } = values
          // console.log(file)
          dispatch(requestApiData(file))
          // setSubmitting(false)
          // resetForm()
          //}, 1000)
          // data.dispatch(requestApiData([values]))
          // setSubmitting(false)
          // onSubmit={(values, data,  setSubmitting: any ) => {
          //   const bodyFormData = new FormData()
          //   bodyFormData.append('file', values.file)
          //   console.log(bodyFormData)
          //   console.log("enter the submit function",values)
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, data,  null, 2))
          //     setSubmitting(false)
          //   }, 1000)
          // const recaptchaValue = recaptchaRef.current.getValue()s
          //axios.post(url, bodyFormData)
          // resetForm(values)

          // setShowMsg(true)
          // setTimeout(() => {
          //   handleClose()
          //   setShowMsg(false)
          // }, 6000)
        }}
      >
        {formik => (
          // <div className={showHideClassName} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="wrap-login100">
            <Form className="inputform" onSubmit={formik.handleSubmit}>
              {/* <CustomInput
                type='file'
                id='file-upload'
                name='file'
                onBlur={formik.handleBlur}
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                // onChange={(event) => {
                //   formik.setFieldValue('file', event.currentTarget.files[0])
                // }}
                value={formik.values.file || ''}
              /> */}
              {/* <ErrorMessage component="div"  className="error" /> */}
              <Label>
                Resume
                <span style={{ color: "red" }}>*</span>
              </Label>
              <Col>
                <TextField
                  name="file"
                  type="file"
                  onBlur={formik.handleBlur}
                  accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={event => {
                    formik.setFieldValue("file", event.currentTarget.files[0])
                  }}
                  value={formik.values.file || ""}
                />
              </Col>
              {/* <ErrorMessage name="file" class="div" /> */}
              <Button.Ripple
                color="primary"
                className="btn-next mt-1"
                onClick={() => stepper.next()}
                type="submit"
              // disabled={!(formik.isValid && formik.dirty)}
              >
                <span className="align-middle d-sm-inline-block d-none">
                  Next
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ml-sm-25 ml-0"
                ></ArrowRight>
              </Button.Ripple>
            </Form>
          </div>
        )}
      </Formik>
    </Fragment>
  )
}

export default AddResume