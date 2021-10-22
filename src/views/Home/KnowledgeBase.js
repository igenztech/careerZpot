import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import Breadcrumbs from '@components/breadcrumbs'
import KnowledgeBaseHeader from './HomeHeader'
import {
  Row, Col, Card, CardBody, Progress, Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'
import { Share2, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'react-feather'
import '@styles/base/pages/page-knowledge-base.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import HowItWorks from './Howitworks'
import RecruiterPartner from './recruiterPartner'
import CardHeader from 'reactstrap/lib/CardHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import ViewSidebar from './viewSidebar'
// import ResumeBottom from './ResumeBottom'
import './styles.css'

const Home = () => {

  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState('')
  const store = useSelector(state => state.knowledgeBase)

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [X, setX] = useState('')
  const [viewModalShow, setViewModalShow] = useState(false)
  const [openViewSidebar, setOpenViewSideBar] = useState(false)
  const [scrollYSuppressed, setScrollYSuppressed] = useState(true)
  const toogleViewSideBar = (item) => {
    setOpenViewSideBar(!openViewSidebar)
    setX(item)
    console.log(X)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    axios.get('http://localhost:8080/getJobData').then(res => setData(res.data))
  }, [])

  const Content = ({ item }) => (

    <Col className='kb-search-content' key={item.id} md='4' >
      <Card>
        <CardBody className='text-center'>
          <h5 style={{ textAlign: 'left' }}>{item.designation}</h5>
          <h6 style={{ textAlign: 'left', color: '#7367f0' }}>{item.companyname}</h6>
          <p className='text-body' style={{ textAlign: 'left' }}>{item.description}</p>
          <Row md='12' className='buttonz'>
            <Col md='4'>
              <Button.Ripple className='round bg-lighten-5' color='gradient-primary' size='sm'
                onClick={() => toogleViewSideBar(item)}
              >
                View
              </Button.Ripple>
            </Col>
            <Col md='3' >
              <UncontrolledButtonDropdown>
                <DropdownToggle color='' style={{ bottom: '8px' }} caret>
                  <Share2 size={20} style={{ color: '#7367f0' }} />
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                    <Facebook size={16} />
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                    <Twitter size={16} />
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                    <Linkedin size={16} />
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                    <Instagram size={16} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </Col>

            <Col md='5' >
              <MapPin size={20} style={{ color: '#7367f0', bottom: '8px' }} />
              <span className='text-body'> {item.location}</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>


  )

  const renderContent = () => {
    return data.map(item => {
      const titleCondition = item.designation.toLowerCase().includes(searchTerm.toLowerCase()),
        descCondition = item.description.toLowerCase().includes(searchTerm.toLowerCase()),
        compCondition = item.companyname.toLowerCase().includes(searchTerm.toLowerCase()),
        locationCondition = item.location.toLowerCase().includes(searchTerm.toLowerCase())

      if (searchTerm.length < 1) {
        return <Content key={item.id} item={item} />
      } else if (titleCondition || descCondition || compCondition || locationCondition) {
        return <Content key={item.id} item={item} />
      } else {
        return null
      }
    })
  }

  return (
    <div>
      <Fragment>
        <Breadcrumbs breadCrumbTitle='CareerZopt' breadCrumbParent='Careers' />
        <KnowledgeBaseHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {data !== null ? (
          <div id='knowledge-base-content'>
            <Row>
              <Col md='9'>
                <h3 className='mb-1'><span style={{ color: 'black', fontWeight: 'bold' }}>Trending</span> <span style={{ color: '#7367f0', fontWeight: 'bold' }}>Jobs</span></h3>
                <PerfectScrollbar
                  className='jobs-scrollbar'
                  options={{ suppressScrollX: true }}
                >
                  <Row className='pr-1'>{renderContent()}</Row>
                </PerfectScrollbar>
              </Col>
              <Col md='3'>
                <Card className='card-app-design mt-3' >
                  <CardHeader><h1><span style={{ color: 'black' }}>Top</span> <span style={{ color: '#7367f0', fontWeight: 'bold' }}>Categories</span></h1></CardHeader>
                  <CardBody>
                    <div className='demo-vertical-spacing'>
                      <div>
                        <span>Banking… 102</span>
                        <Progress value='35' />
                      </div>
                      <div>
                        <span>Technology… 252</span>
                        <Progress value='57' />
                      </div>
                      <div>
                        <span>Education… 502</span>
                        <Progress value='56' />
                      </div>
                      <div>
                        <span>Hospitality… 752</span>
                        <Progress value='44' />
                      </div>
                      <div>
                        <span>Others… 802</span>
                        <Progress value='100' />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        ) : null}

        <RecruiterPartner />
      </Fragment>
      <ViewSidebar
        open={openViewSidebar}
        toggleSidebar={toogleViewSideBar}
        item={X}
      />
    </div>
  )
}

export default Home
