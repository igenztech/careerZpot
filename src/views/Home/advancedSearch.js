// import { useEffect, useState } from 'react'
// // import ReCAPTCHA from 'react-google-recaptcha'
// import { Row, Col, Button, Modal, Form } from 'react-bootstrap'
// import './advancedSearch.css'
// import {
//     FormGroup,
//     Input,
//     Label
    
// } from 'reactstrap'
// import MultiToggle from "react-multi-toggle"
// import "react-multi-toggle/style.css"
// import './toggle.css'
// import { useHistory } from 'react-router'

// const AdvancedSearch = (props) => {

//     const [selected, setSelected] = useState("on")
//     const [selected1, setSelected1] = useState("on")

//     // const [name, setName] = useState('')
//     // const [email, setEmail] = useState('')
//     // const [phone, setPhone] = useState('')
//     // const [file, setFile] = useState('')
//     // const [loader, setLoader] = useState(false)
//     // const [token, setToken] = useState()
//     const history = useHistory()
//     const jobtype = [
//         {
//             displayName: "All Jobs",
//             value: "alljobs",
//             optionClass: "all-jobs"
//         },
//         {
//             displayName: "Company Jobs",
//             value: "companyjobs",
//             optionClass: "company-jobs"
//         },
//         {
//             displayName: "Consultant Jobs",
//             value: "consultantjobs",
//             optionClass: "consultant-jobs"
//         }
//     ]
//     const sortby = [
//         {
//             displayName: "Relevance",
//             value: "relevance",
//             optionClass: "relevance"
//         },
//         {
//             displayName: "Date",
//             value: "date",
//             optionClass: "date"
//         }
//     ]

//     const onSubmit = async (e) => {
//         e.preventDefault()
//         // const name = e.target.name.value
//         // const email = e.target.email.value
//         // const phone = e.target.phone.value

//     }

//     const handleReset = () => {
//         // setName('')
//         // setEmail('')
//         // setPhone('')
//         // setFile('')
//     }

//     return (

//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header className='modalheaderimg' style={{ height: '50px', backgroundColor: '#7367f0', display: 'flex', justifyContent: 'center' }}>
//                 <a className="close-button"
//                     onClick={() => history.push('/')}
//                 />
//                 <Modal.Title style={{ color: 'white' }}>
//                     {/* {props.label} */}
//                     Advanced search
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body style={{ backgroundColor: 'white' }}>
//                 <Form onSubmit={onSubmit}>
                    /* <FormGroup row className='mb-2'>
                        <Label sm='3' style={{ justifyContent: 'right', display: 'flex', alignItems: 'right' }}>
                            Key Skills
                        </Label>
                        <Col sm='9'>
                            <Input
                                name='keyskill'
                                type='text'
                                placeholder='Skills, Designation, Companies...'
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                            // required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mb-2'>
                        <Label sm='3' style={{ justifyContent: 'right', display: 'flex', alignItems: 'right' }}>
                            Location
                        </Label>
                        <Col sm='9'>
                            <Input sm='10'
                                name='location'
                                type='text'
                                placeholder='Enter the cities you want to work in...'
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            // required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='mb-2'>
                        <Label sm='3' style={{ justifyContent: 'right', display: 'flex', alignItems: 'right' }}>
                            Industry
                        </Label>
                        <Col sm='9'>
                            <Input sm='10'
                                name='industry'
                                type='text'
                                placeholder='Select the desired industry where you want to work...'
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            // required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='mb-2'>
                        <Label sm='3' style={{ justifyContent: 'right', display: 'flex', alignItems: 'right' }}>
                            Job Category
                        </Label>
                        <Col sm='9'>
                            <Input sm='10'
                                name='jobcategory'
                                type='text'
                                placeholder='Select your area of expertise...'
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                            // required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='mb-2'>
                        <Label sm='3' style={{ justifyContent: 'right', display: 'flex', alignItems: 'right' }}>
                            Job Type
                        </Label>
                        <Col sm='9'>
                            <MultiToggle
                                options={jobtype}
                                selectedOption={selected}
                                onSelectOption={value => setSelected(value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='mb-2'>
                        <Label sm='3' style={{ justifyContent: 'right', display: 'flex', alignItems: 'right' }}>
                            Sort By
                        </Label>
                        <Col sm='9'>
                            <MultiToggle
                                options={sortby}
                                selectedOption={selected1}
                                onSelectOption={value => setSelected1(value)}
                            />
                        </Col>
                    </FormGroup> */
                    
//                     <Row className='mt-1'>
//                         <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                             <Button style={{ width: 'auto', backgroundColor: '#224b73' }}
//                                 // onClick={onHide}
//                                 type='submit'
//                             >
//                                 Search
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Modal.Body>
//         </Modal>
//     )
// }

// export default AdvancedSearch