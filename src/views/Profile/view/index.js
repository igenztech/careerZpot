import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import ProfileDetails from './ProfileDetails'
import Breadcrumbs from './steps/Breadcrumbs'

const Wizard = () => {
  return (
    
    <Fragment>
      <Breadcrumbs/>
      {/* <BreadCrumbs breadCrumbTitle='CareerZopt' breadCrumbParent='Profile Details' breadCrumbActive='Attach Resume' /> */}
      <Row>
        <Col sm='12'>
          <ProfileDetails />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Wizard
