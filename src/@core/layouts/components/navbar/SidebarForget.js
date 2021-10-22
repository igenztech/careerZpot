
import { Link } from 'react-router-dom'
import { useState, Fragment } from 'react'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Sidebar from '@components/sidebar'
import '@styles/base/pages/page-auth.scss'

const ForgotPasswordV2 = ({ open, toggleSidebar }) => {

    const [role, setRole] = useState('subscriber')
    const [plan, setPlan] = useState('basic')
    // const [skin, setSkin] = useSkin()
    const [privacyChk, setPrivacyChk] = useState(false)

    // const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    //     source = require(`@src/assets/images/pages/${illustration}`).default

    return (
        <Sidebar
            size='lg'
            open={open}
            title='Forget Password'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            {/* <div className='auth-wrapper auth-v2'> */}
            <Row className=''>

                {/* <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'> */}
                <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                    <Link to='/' onClick={e => e.preventDefault()}>
                        <h2 className='mb-1' style={{ textAlign:'center', justifyContent:'center', display:'flex' }}><span style={{ fontWeight: 'bold' }}>Career</span><span style={{ color: '#7367f0', fontWeight: 'bold' }}>Zopt</span></h2>
                    </Link>
                    <CardTitle tag='h2' className='font-weight-bold mb-1'>
                        Forgot Password? 🔒
                    </CardTitle>
                    <CardText className='mb-2'>
                        Enter your email and we'll send you instructions to reset your password
                    </CardText>
                    <Form className='auth-forgot-password-form mt-2' onSubmit={e => e.preventDefault()}>
                        <FormGroup>
                            <Label className='form-label' for='login-email'>
                                Email
                            </Label>
                            <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
                        </FormGroup>
                        <Button.Ripple color='primary' block>
                            Send reset link
                        </Button.Ripple>
                    </Form>
                    <p className='text-center mt-2'>
                        <Link onClick={toggleSidebar}>
                            <ChevronLeft className='mr-25' size={14} />
                            <span className='align-middle'>Back to login</span>
                        </Link>
                    </p>
                </Col>
                {/* </Col> */}
            </Row>
            {/* </div> */}
        </Sidebar>
    )
}

export default ForgotPasswordV2
