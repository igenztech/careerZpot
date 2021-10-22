import { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'// ** React Import
import useJwt from '@src/auth/jwt/useJwt'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty } from '@utils'
import { AbilityContext } from '@src/utility/context/Can'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

// ** Store & Actions
// import { addUser } from '../store/action'
import { useDispatch } from 'react-redux'

const RegisterV2 = ({ open, toggleSidebar }) => {
  // ** States
  const ability = useContext(AbilityContext)
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')
  const [skin, setSkin] = useSkin()
  const history = useHistory()

  const dispatch = useDispatch()

  const { register, errors, handleSubmit, trigger } = useForm()
  const [email, setEmail] = useState('')
  const [valErrors, setValErrors] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const { register, errors, handleSubmit } = useForm()

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const RememberMe = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }
  // ** Store Vars
  //   const dispatch = useDispatch()

  // ** Vars

  // ** Function to handle form submit
  const onSubmit = () => {
    if (isObjEmpty(errors)) {
      useJwt
        .register({ username, email, password })
        .then(res => {
          if (res.data.error) {
            const arr = {}
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) arr[property] = res.data.error[property]
            }
            setValErrors(arr)
            if (res.data.error.email !== null) console.error(res.data.error.email)
            if (res.data.error.username !== null) console.error(res.data.error.username)
          } else {
            setValErrors({})
            const data = { ...res.data.user, accessToken: res.data.accessToken }
            ability.update(res.data.user.ability)
            dispatch(handleLogin(data))
            history.push('/')
          }
        })
        .catch(err => console.log(err))
    }
  }
  const handleUsernameChange = e => {
    const errs = valErrors
    if (errs.username) delete errs.username
    setUsername(e.target.value)
    setValErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = valErrors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setValErrors(errs)
  }

  return (
    // <div>
    <Sidebar
      size='lg'
      open={open}
      // title='For candidate'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <div className='auth-wrapper auth-v2'>
        <Row className='auth-inner m-0'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>

          </Link>
          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <CardTitle tag='h2' className='font-weight-bold mb-1'>
                Adventure starts here 🚀
              </CardTitle>
              <CardText className='mb-2'>Make your app management easy and fun!</CardText>
              <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>
                <FormGroup>
                  <Label className='form-label' for='register-username'>
                    Username
                  </Label>
                  <Input type='text' id='register-username' placeholder='johndoe' autoFocus 
                  name='register-username'
                  onChange={handleUsernameChange}
                  className={classnames({ 'is-invalid': errors['register-username'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                  />
                  {Object.keys(valErrors).length && valErrors.username ? (
                  <small className='text-danger'>{valErrors.username}</small>
                ) : null}
                </FormGroup>
                <FormGroup>
                  <Label className='form-label' for='register-email'>
                    Email
                  </Label>
                  <Input type='email' id='register-email' placeholder='john@example.com' />
                </FormGroup>
                <FormGroup>
                  <Label className='form-label' for='register-password'>
                    Password
                  </Label>
                  <InputPasswordToggle className='input-group-merge' id='register-password' />
                </FormGroup>
                <FormGroup>
                  <CustomInput
                    type='checkbox'
                    className='custom-control-Primary'
                    id='remember-me'
                    label={<RememberMe />}
                  />
                </FormGroup>
                <Button.Ripple color='primary' type='submit' block>
                  Sign up
                </Button.Ripple>
              </Form>
              <p className='text-center mt-2'>
                <span className='mr-25'>Already have an account?</span>
                <Link to='/pages/login-v1'>
                  <span>Sign in instead</span>
                </Link>
              </p>
              <div className='divider my-2'>
                <div className='divider-text'>or</div>
              </div>
              <div className='auth-footer-btn d-flex justify-content-center'>
                <Button.Ripple color='facebook'>
                  <Facebook size={14} />
                </Button.Ripple>
                <Button.Ripple color='twitter'>
                  <Twitter size={14} />
                </Button.Ripple>
                <Button.Ripple color='google'>
                  <Mail size={14} />
                </Button.Ripple>
                <Button.Ripple className='mr-0' color='github'>
                  <GitHub size={14} />
                </Button.Ripple>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Sidebar>
    // </div >

  )
}

export default RegisterV2