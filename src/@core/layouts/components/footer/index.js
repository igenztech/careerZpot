import React from 'react'
import { Row, Col, CardHeader } from 'reactstrap'
import { Link } from 'react-router-dom'
import './footerStyles.css'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'
const Footer = () => {
  return (

    <div className='footer-background'>
      <Row >
        <Col>
          <Col><div className='footer-heads'>Job Seeker</div></Col>
          <Col><Link className='footer-link' href="#">Search Job</Link></Col>
          <Col><Link className='footer-link' href="#">Career Advice</Link></Col>
          <Col><Link className='footer-link' href="#">Jobs for Freshers</Link></Col>
          <Col><Link className='footer-link' href="#">Jobs for Experienced</Link></Col>
        </Col>
        <Col>
          <Col><div className='footer-heads'>Jobs by Roles</div></Col>
          <Col><Link className='footer-link' href="#">Accountant Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Architect Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">BPO Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Telecaller Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Content Writer Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Data Entry/Back Office</Link></Col>
          <Col><Link className='footer-link' href="#">Doctor/Physician</Link></Col>
          <Col><Link className='footer-link' href="#">Engineer</Link></Col>
        </Col>
        <Col>
          <Col><div className='footer-heads'>Work from Home Jobs</div></Col>
          <Col><Link className='footer-link' href="#">Bangalore</Link></Col>
          <Col><Link className='footer-link' href="#">Ahemdabad</Link></Col>
          <Col><Link className='footer-link' href="#">Indore</Link></Col>
          <Col><Link className='footer-link' href="#">Mumbai</Link></Col>
          <Col><Link className='footer-link' href="#">Chennai</Link></Col>
          <Col><Link className='footer-link' href="#">Hyderabad</Link></Col>
          <Col><Link className='footer-link' href="#">Delhi</Link></Col>
          <Col><Link className='footer-link' href="#">Kolkata</Link></Col>
        </Col>
        <Col>
          <Col><div className='footer-heads'>Job Categories</div></Col>
          <Col><Link className='footer-link' href="#">IT/Software Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Core Technical Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Govt Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">MBA Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Internship Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Diploma Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Research Jobs</Link></Col>
          <Col><Link className='footer-link' href="#">Defence Jobs</Link></Col>
        </Col>
        <Col>
          <Col><div className='footer-heads'>Find Jobs</div></Col>
          <Col><Link className='footer-link' href="#">About Us</Link></Col>
          <Col><Link className='footer-link' href="#">Contact Us</Link></Col>
          <Col><Link className='footer-link' href="#">Site Map</Link></Col>
          <Col><Link className='footer-link' href="#"><span>Terms</span> <span>&</span> <span>Condition</span></Link></Col>
          <Col><Link className='footer-link' href="#">FAQs</Link></Col>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Facebook className='footer-social-icons'/>
          <Instagram className='footer-social-icons'/>
          <Linkedin className='footer-social-icons'/>
          <Twitter className='footer-social-icons'/>
        </Col>
      </Row>
    </div >
  )
}

export default Footer