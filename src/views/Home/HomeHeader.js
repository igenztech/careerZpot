import { useState } from 'react'
import { Search } from 'react-feather'
import {
  Card, CardBody, CardText, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col, CustomInput,
  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from 'reactstrap'
import './styles.css'

const Home = ({ searchTerm, setSearchTerm, handleFilter, searchTerm1, setSearchTerm1, handleFilter1, searchTerm2, setSearchTerm2, handleFilter2 }, props) => {

  const [modalShow, setModalShow] = useState(false)
  const [advanceChkBox, setAdvanceChkBox] = useState(false)
 
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }
  const onChange1 = e => {
    if (handleFilter1) {
      handleFilter1(e)
    } else {
      setSearchTerm1(e.target.value)
    }
  }
  const onChange2 = e => {
    if (handleFilter2) {
      handleFilter2(e)
    } else {
      setSearchTerm2(e.target.value)
    }
  }

  return (
    <div >
      <Card
        className='knowledge-base-bg'
        style={{
          backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`
        }}
      >
        <CardBody className='text-center search-card'>
          <h1 className='text-primary'>Where Competency Meets The Candidates</h1>
          <CardText className='mb-2'>
            Popular searches: <span className='font-weight-bolder'>Full Stack Developer, .Net Developer</span>
          </CardText>
          <Form className='kb-search-input' onSubmit={e => e.preventDefault()}>
            <Row md='12' className='mb-1'>
              <InputGroup className='input-group-merge' >
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Search size={14} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input value={searchTerm} onChange={e => onChange(e)} placeholder='Search for locations, titles, skills etc...' />
              </InputGroup>
            </Row>

            <Row className="mb-1" md="12">
              {/* <Col md='12'>
                  <Link onClick={() => setModalShow(true)}>Advanced Search</Link>
                </Col> */}
              <Col md="12">
                <CustomInput
                  inline
                  type="checkbox"
                  id="advchkbox"
                  label="Advanced Search"
                  value="advchkbox"
                  checked={advanceChkBox}
                  onChange={(e) => {
                    setAdvanceChkBox(e.target.checked)
                  }}
                />
              </Col>
            </Row>
            {advanceChkBox && (
              <Row md='12'>
                <Col md='12' >
                  <div className='demo-inline-spacing' style={{ justifyContent: 'center', alignContent: 'center', display: 'flex' }}>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Date Posted
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    {/* <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Remote
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown> */}
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Within 25 Km's
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Salary Estimate
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Job Type
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Education level
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Location
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle className='btn-gradient-primary' color='none' caret>
                        Job Language
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href='/' tag='a'>
                          Option 1
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 2
                        </DropdownItem>
                        <DropdownItem href='/' tag='a'>
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </Col>
              </Row>
            )}
          </Form>
        </CardBody>
      </Card>
      {/* <AdvancedSearch
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </div>
  )
}

export default Home