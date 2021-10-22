import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Card, CardBody, CardText, Media, ListGroup, ListGroupItem, CardTitle, Button } from 'reactstrap'
import { Info, Smartphone, Calendar, MapPin, DollarSign } from 'react-feather'
import illustration from '@src/assets/images/illustration/email.svg'
import Avatar from '@components/avatar'
import '@styles/base/pages/page-knowledge-base.scss'
import './button.css'

const KnowledgeBaseCategory = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/faq/data/question').then(res => setData(res.data))
  }, [])

  const renderRelatedQuestions = () => {
    return data.relatedQuestions.map(i => (
      <ListGroupItem className='text-body' tag='a' href='/' key={i.id} onClick={e => e.preventDefault()}>
        {i.question}
      </ListGroupItem>
    ))
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='CareerZopt'
        breadCrumbParent='Pages'
      // breadCrumbParent2='Knowledge Base'
      // breadCrumbParent3='Category'
      // breadCrumbActive='Question'
      />
      {data !== null ? (
        <div id='knowledge-base-question'>
          <Row>
            <Col lg='3' md={{ size: 5, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
              <Card className='card-developer-meetup'>
                <div className='meetup-img-wrapper rounded-top text-center'>
                  <img src={illustration} height='170' />
                </div>
                <CardBody>
                  <div className='meetup-header d-flex align-items-center'>
                    <div className='meetup-day'>
                      <h6 className='mb-0'>APRIL</h6>
                      <h6 className='mb-0'>24</h6>
                      <h6 className='mb-0'>2021</h6>
                    </div>
                    <div className='my-auto'>
                      <CardTitle tag='h4' className='mb-25'>
                        Company Name
                      </CardTitle>
                      <CardText className='mb-0'>Designation</CardText>
                    </div>
                  </div>
                  <Media className='mt-2'>
                    <Avatar color='light-primary' className='rounded mr-1' icon={<MapPin size={18} />} />
                    <h6 className='mb-0'>Location</h6>

                  </Media>
                  <Media className='mt-2 mb-2'>
                    <Avatar color='light-primary' className='rounded mr-1' icon={<DollarSign size={18} />} />
                    <h6 className='mb-0'>Salary</h6>
                  </Media>
                  <Col>
                    <Button.Ripple className='submit-btn' block>Apply</Button.Ripple>
                  </Col>
                </CardBody>
              </Card>
            </Col>
            <Col lg='9' md={{ size: 7, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
              <Card>
                <CardBody>
                  <CardTitle className='mb-1'>
                    <span><h2> Details/Contents</h2></span>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default KnowledgeBaseCategory
