// ** React Import
import { useState, Fragment, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import { Row, Col, CardText, Media, CardTitle, Button } from 'reactstrap'
import illustration from '@src/assets/images/illustration/email.svg'
import Avatar from '@components/avatar'
import { MapPin, DollarSign } from 'react-feather'
import '@styles/base/pages/page-knowledge-base.scss'
import './button.css'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import axios from 'axios'

const ViewSidebar = ({ open, toggleSidebar, item }) => {

    // ** States
    const [role, setRole] = useState('subscriber')
    const [plan, setPlan] = useState('basic')
    const [data, setData] = useState(null)

    // ** Store Vars
    // const dispatch = useDispatch()

    // ** Function to handle form submit
    const onSubmit = values => {
        if (isObjEmpty(errors)) {
            toggleSidebar()
            dispatch(
                addUser({
                    fullName: values['full-name'],
                    company: values.company,
                    role,
                    username: values.username,
                    country: values.country,
                    contact: values.contact,
                    email: values.email,
                    currentPlan: plan,
                    status: 'active',
                    avatar: ''
                })
            )
        }
    }

    return (
        <Sidebar
            size='lg'
            open={open}
            title={item.designation}
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
            item={item}
        >
            <Fragment>
                <Row>
                    <Col lg='12'>
                        <div className='meetup-img-wrapper rounded-top text-center'>
                            <img src={illustration} height='170' />
                        </div>
                        <div className='mt-1 ml-2'>
                            <div className=' d-flex align-items-center'>
                                <div className='meetup-day ml-2 mr-1' >
                                    <h4 className='mb-0'>APRIL</h4>
                                    <h5 className='mb-0'>25</h5>
                                    <h5 className='mb-0'>2021</h5>
                                </div>
                                <div className='ml-5'>
                                    <CardTitle className='mb-25 ml-4' >
                                        <h4>{item.companyname}</h4>
                                    </CardTitle>
                                    <CardText className='mb-0  ml-4'>
                                        <h6>{item.designation} </h6>
                                    </CardText>
                                </div>
                            </div>
                            <Row className='mt-2'>
                                <Media className='mt-2'>
                                    <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} inline />} />
                                    <h6 className='mb-0' style={{ marginTop: '5px' }} inline>{item.location}</h6>
                                </Media>
                            </Row>
                            <Row>
                                <Media className='mt-2'>
                                    <Avatar color='light-primary' className='rounded mr-1' icon={<DollarSign size={18} inline />} />
                                    <h6 className='mb-0' inline style={{ marginTop: '5px' }}>{item.salary}</h6>
                                </Media>
                            </Row>

                        </div>
                        <Col className='mt-2 '>
                            <h4>Job Details</h4>
                            <p style={{ textAlign: 'justify', justifyContent: 'center', display: 'flex' }}>{item.descriptiondetails}</p>
                        </Col>
                    </Col>
                </Row>
            </Fragment>
            <Button.Ripple className='submit-btn' block>Apply</Button.Ripple>
        </Sidebar >
    )
}

export default ViewSidebar
