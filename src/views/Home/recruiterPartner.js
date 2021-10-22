// import React from 'react'
// import ReactDOM from 'react-dom'
// import Carousel from 'react-elastic-carousel'
// import Item from './Item'
// import './styles.css'
import { Fragment } from 'react'

// ** Third Party Components
// import classnames from 'classnames'
// import { Star } from 'react-feather'
// import { CardText } from 'reactstrap'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import '@styles/react/libs/swiper/swiper.scss'

import apple from './images/apple.jpg'
import accenture from './images/accenture.jpeg'
import dell from './images/dell.jpg'
import hp from './images/hp.jpg'
import igenz from './images/igenz.jpg'
import infosys from './images/infosys.png'
import sobha from './images/sobha.png'
import swiggy from './images/swiggy.jpg'
import wipro from './images/wipro.jpg'
import zomato from './images/zomato.jpg'
// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 850, itemsToShow: 3 },
//     { width: 1150, itemsToShow: 6 }

// ]
const RecruiterPartner = () => {
  SwiperCore.use([Navigation])
  const slides = [
    {
      name: 'Apple Watch Series 6',
      brand: 'Apple',
      ratings: 4,
      price: 399.98,
      img: apple
    },
    {
      name: 'Apple MacBook Pro - Silver',
      brand: 'Apple',
      ratings: 2,
      price: 2449.49,
      img: accenture
    },
    {
      name: 'Apple HomePod (Space Grey)',
      brand: 'Apple',
      ratings: 3,
      price: 229.29,
      img: dell
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: hp
    },
    {
      name: 'iPhone 12 Pro',
      brand: 'Apple',
      ratings: 4,
      price: 1559.99,
      img: igenz
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: infosys
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: sobha
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: swiggy
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: wipro
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: zomato
    }
  ]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 6,
    spaceBetween: 45,
    navigation: true,
    breakpoints: {
      
      1500: {
        slidesPerView: 6,
        spaceBetween: 45
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 45
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 45
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 45
      }
    }
  }

  return (

    <Fragment>
      <h2 className='mb-1 mt-4'><span style={{ color: 'black', fontWeight: 'bold' }}>Recruiter</span> <span style={{ color: '#7367f0', fontWeight: 'bold' }}>Partners</span></h2>
      <Swiper {...params}>
        {slides.map(slide => {
          return (
            <SwiperSlide>
              <div className='img-container w-50 mx-auto py-75'>
                <img src={slide.img} alt='swiper 1' className='img-fluid' />
              </div>
              <div className='item-meta'>
                <ul className='unstyled-list list-inline mb-25'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item mr-25'>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>

  )
}
export default RecruiterPartner