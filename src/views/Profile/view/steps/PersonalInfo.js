import * as Yup from "yup"
import { Fragment, useState } from "react"
import Select from "react-select"
import { Formik, Form, Field } from "formik"
import { TextField } from "../../../common/textField"
import { ArrowLeft, ArrowRight } from "react-feather"
import {
  Label,
  FormGroup,
  Row,
  Col,
  Input,
  CustomInput,
  Button,
  Media,
  Progress
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { addpersonal } from "../../store/action"
import "react-datepicker/dist/react-datepicker.css"
import "@styles/react/libs/react-select/_react-select.scss"
import { selectThemeColors } from "@utils"
//import DatePicker from 'react-datepicker'
import profile from "../../../../assets/images/logo/uploader.png"
import personaldata from "../Data.json"
import Flatpickr from "react-flatpickr"
import "@styles/react/libs/flatpickr/flatpickr.scss"

const PersonalInfo = ({ stepper, type }) => {
  // const [picker, setPicker] = useState('')
  // const [startDate, setStartDate] = useState(new Date())
  const [avatar, setAvatar] = useState([])
  // const [gender, setGender] = useState('')
  // const [Username, setUsername] = React.useState("")
  const dispatch = useDispatch()
  const resumeparser = useSelector(state => state.candidate.data)
  const personalDetails = useSelector(state => state.candidate.personalDetails)
  console.log("Pers.name", resumeparser.name)
  const languageOptions = personaldata.language.map(lngdata => ({
    value: lngdata.value,
    label: lngdata.label
  }))

  const genderOptions = personaldata.gender.map(gendata => ({
    value: gendata.value,
    label: gendata.label
  }))
  // const [selectedCountry, setSelectedCountry] = useState("")
  // const curSelection = []

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validate = Yup.object().shape({
    UserName: Yup.string()
      // .min(6, "Atleast 6 characters")
      // .max(20, "Must be 10 characters or less")
      .required("Full Name is Required"),
    gender: Yup.string().required("Gender is required"),

    dob: Yup.date().required("Date is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    mobile: Yup.string()
      .required("Mobile is Required")
      .min(10, "Phone Number Should be Min 7 digits")
      .max(10, "Phone Number Should be Max 12 digits"),
    //.matches(phoneRegExp, "Phone Number is not valid"),
    country: Yup.string().required("country is required"),
    pincode: Yup.string()
      .min(6, "pincode Should be Min 6 digits")
      .max(6, "pincode Should be Max 6 digits")
      .required("pincode is required")
  })
  // const handleCountryChange = (selectedcountry, values) => {
  //   values.country = selectedcountry.value
  //   console.log(selectedcountry)
  //   setSelectedCountry(selectedcountry)
  // }
  const countryOptions = [
    { value: "Australia", label: "Australia" },
    { value: "Britian", label: "Britian" },
    { value: "Canada", label: "Canada" },
    { value: "India", label: "India" },
    { value: "France", label: "France" },
    { value: "Japan", label: "Japan" }
  ]

  return (
    <Fragment>
      <div className="demo-vertical-spacing mb-1">
        <Progress value="35" />
      </div>
      <div className="content-header">
        <h5 className="mb-0">Personal Info</h5>
      </div>

      <Media>
        {avatar && avatar.length > 0 ? (
          <Media object src={avatar} height="100" width="100" />
        ) : (
          <Media object src={profile} height="70" width="120" />
        )}
        <Media className="mt-75 ml-1" body>
          <Button.Ripple
            tag={Label}
            className="mr-75"
            size="sm"
            color="primary"
          >
            Upload
            <Input type="file" onChange={onChange} hidden accept="image/*" />
          </Button.Ripple>
          <p>Allowed JPG, JPEG or PNG. Max size of 800kB</p>
        </Media>
      </Media>
      <Formik
        enableReinitialize={true}
        initialValues={{
          UserName: resumeparser.name,
          gender: "",
          dob: new Date(),
          language: "",
          email: resumeparser.email,
          mobile: resumeparser.phone,
          country: "",
          pincode: ""
        }}
        // initialTouched={{
        //   field: true
        // }}
        validateOnChange={true}
        validationSchema={validate}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const bodyFormData = new FormData()
          bodyFormData.append("UserName", values.UserName)
          bodyFormData.append("gender", Yup.bool.gender)
          bodyFormData.append("dob", values.dob)
          bodyFormData.append("language", values.language)
          bodyFormData.append("email", values.email)
          bodyFormData.append("mobile", values.mobile)
          bodyFormData.append("country", values.country)
          bodyFormData.append("pincode", values.pincode)
          console.log({ bodyFormData })

          dispatch(addpersonal(values))
          // setSubmitting(false)
        }}
      >
        {formik => (
          <div className="wrap-login100">
            <Form className="inputform" onSubmit={formik.handleSubmit}>
              <Row>
                <FormGroup tag={Col} md="6">
                  <Label className="form-label">
                    Full Name
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Row>
                    {/* <Col md='2'>
                      <Input type='select'>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                      </Input>
                    </Col> */}
                    <Col md="12">
                      <Input
                        name="UserName"
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={event => {
                          formik.setFieldValue(
                            "UserName",
                            event.currentTarget.value
                          )
                        }}
                        value={formik.values.UserName || ""}
                        required
                      />
                    </Col>
                  </Row>
                  {formik.errors.UserName ? (
                    <div className="text-danger">{formik.errors.UserName}</div>
                  ) : null}
                  {console.log("Formik :", formik.isValid)}
                  {console.log("username :", formik.values.UserName)}
                </FormGroup>

                {/* <FormGroup tag={Col} md='6'>
                  <Label className='form-label' >
                    Gender
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Input
                    isClearable={false}
                    theme={selectThemeColors}
                    type="select"
                    // id={`gender-${type}`}
                    // options={genderOptions}
                    className='react-select'
                    classNamePrefix='select'
                    placeholder='Select'
                    onChange={(event) => formik.setFieldValue('gender', event.currentTarget.value)}
                    required
                    >
                  <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  <Input/>
                </FormGroup> */}
                <FormGroup tag={Col} md="6">
                  <Label className="form-label">
                    Gender
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="select"
                    name="gender"
                    onChange={event => {
                      formik.setFieldValue("gender", event.currentTarget.value)
                    }}
                    value={formik.values.gender}
                    required
                    onBlur={formik.handleBlur}
                  >
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Input>
                  {formik.errors.gender && formik.touched.gender ? (
                    <div className="text-danger">{formik.errors.gender}</div>
                  ) : null}
                </FormGroup>
              </Row>
              <Row>
                <FormGroup tag={Col} md="6">
                  <Label className="form-label">
                    DOB
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Flatpickr
                    required
                    // id='dob'
                    //tag={Flatpickr}
                    name="dob"
                    className="form-control"
                    onBlur={formik.handleBlur}
                    //onChange={formik.setFieldValue("dob", formik.values.dob)}
                    value={formik.values.dob}
                    // value={picker}
                    // onChange={(date) => formik.setFieldValue(setPicker(date[0]))}
                  />
                  {console.log(formik.values.dob)}
                  {formik.errors.dob && formik.errors.dob ? (
                    <div className="text-danger">{formik.errors.dob}</div>
                  ) : null}
                </FormGroup>

                <FormGroup tag={Col} md="6">
                  <Label className="form-label">Language</Label>
                  <Select
                    name="language"
                    isMulti
                    isClearable={false}
                    theme={selectThemeColors}
                    // id={`language-${type}`}
                    options={languageOptions}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Select"
                    value={formik.values.language}
                    onBlur={formik.handleBlur}
                    onChange={selectedOption => {
                      // This inline function can now completely be reaplce by handleChange("year")
                      formik.setFieldValue("language", selectedOption)
                    }}
                    required
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup tag={Col} md="6">
                  <Label for="email">
                    Email
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    // onChange={(event) => formik.setFieldValue('email', event.currentTarget.value)}
                    // value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={event => {
                      formik.setFieldValue("email", event.currentTarget.value)
                    }}
                    value={formik.values.email || ""}
                    required
                  />
                  {formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </FormGroup>

                <FormGroup tag={Col} md="6">
                  <Label className="form-label">
                    Mobile
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="number"
                    name="mobile"
                    onBlur={formik.handleBlur}
                    onChange={event => {
                      formik.setFieldValue("mobile", event.currentTarget.value)
                    }}
                    value={formik.values.mobile || ""}
                    // required
                  />
                  {formik.errors.mobile ? (
                    <div className="text-danger">{formik.errors.mobile}</div>
                  ) : null}
                </FormGroup>
              </Row>

              <Row>
                <FormGroup tag={Col} md="6">
                  <Label className="form-label">
                    Country
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="select"
                    name="country"
                    onChange={event => {
                      formik.setFieldValue("country", event.currentTarget.value)
                    }}
                    value={formik.values.country}
                    required
                    onBlur={formik.handleBlur}
                  >
                    <option>Select</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>France</option>
                    <option>Australia</option>
                    <option>Germany</option>
                  </Input>
                  {formik.errors.country && formik.touched.country ? (
                    <div className="text-danger">{formik.errors.country}</div>
                  ) : null}
                </FormGroup>

                <FormGroup tag={Col} md="6">
                  <Label className="form-label">
                    Pincode
                    <span style={{ color: "red" }}>*</span>
                  </Label>
                  <Input
                    type="number"
                    name="pincode"
                    // onChange={(event) => formik.setFieldValue('pincode', event.currentTarget.value)}
                    // value={formik.values.pincode}
                    onBlur={formik.handleBlur}
                    onChange={event => {
                      formik.setFieldValue("pincode", event.currentTarget.value)
                    }}
                    value={formik.values.pincode || ""}
                    required
                  />
                  {formik.errors.pincode && formik.touched.pincode ? (
                    <div className="text-danger">{formik.errors.pincode}</div>
                  ) : null}
                </FormGroup>
              </Row>

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
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  onClick={() => {
                    stepper.next()
                  }}
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
          </div>
        )}
      </Formik>
    </Fragment>
  )
}

export default PersonalInfo