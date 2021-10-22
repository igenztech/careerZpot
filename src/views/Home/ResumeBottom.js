import { Link } from 'react-router-dom'
import { Card, CardBody, Button, Row, Col } from 'reactstrap'
import './styles.css'

const ResumeBottom = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card className='card-upload-resume p-1'>
        <CardBody style={{}}>
          <Row md='12' >
            <Col md='9'>
              <div className='text-center'>
                <h2 className='text-white bold' style={{ justifyContent: 'left', textAlign: 'left', display: 'flex' }}>
                  Start your Career by uploading
                </h2>
                <h2 className='text-white bold' style={{ justifyContent: 'left', textAlign: 'left', display: 'flex' }}>
                  your awesome resume.
                </h2>
              </div>
            </Col>
            <Col md='3' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <Link to='/profiledetails'>
                <Button.Ripple className='upload-resume-bottom p-1'>Resume</Button.Ripple>
              </Link>
            </Col>
          </Row>

        </CardBody>
      </Card>
    </div>

  )
}

export default ResumeBottom
