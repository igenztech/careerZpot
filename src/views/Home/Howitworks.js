// import React, { FC } from "react"
import { Row, Col, CardText } from 'reactstrap'
// import Card from "reactstrap/lib/Card"
import { Award, Clock, PlusSquare, Search, Shield, ThumbsUp } from 'react-feather'
// import { ArrowLeft, ArrowRight, X, Plus, MoreVertical, Edit, Trash } from 'react-feather'
// import "./howitworks.css"
const HowItWorks = () => {
  return (
    <div className='item-features mt-2 mb-2'>
      <div className="section-header mb-1">
        <h2 className="section-title" style={{ color: '#081bc9', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>How It Works?</h2>
      </div>
      <Row className='text-center'>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <PlusSquare />
            <h4 className='mt-2 mb-1' style={{ color: '#081bc9', fontWeight: 'bold' }}>Create an Account</h4>
            <CardText>Post a job to tell us about your project. We'll quickly match you with the right freelancers
              find place best.</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Search />
            <h4 className='mt-2 mb-1' style={{ color: '#081bc9', fontWeight: 'bold' }}>Search Jobs</h4>
            <CardText>Post a job to tell us about your project. We'll quickly match you with the right freelancers
              find place best.</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <ThumbsUp />
            <h4 className='mt-2 mb-1' style={{ color: '#081bc9', fontWeight: 'bold' }}>Apply</h4>
            <CardText>Post a job to tell us about your project. We'll quickly match you with the right freelancers
              find place best.</CardText>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HowItWorks