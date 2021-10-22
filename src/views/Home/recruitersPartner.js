import React from 'react'
// import ReactDOM from 'react-dom'
import Carousel from 'react-elastic-carousel'
import './styles.css'
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

const breakPoints = [
    // { width: 1, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2 },
    // { width: 850, itemsToShow: 3 },
    // { width: 1150, itemsToShow: 4 },
    // { width: 1450, itemsToShow: 5 }

    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 950, itemsToShow: 6 }

]

const RecruiterPartner = () => {
    return (
        <div>
            <h2 className='mb-1'><span style={{ color: 'black', fontWeight: 'bold' }}>Trending</span> <span style={{ color: '#7367f0', fontWeight: 'bold' }}>Jobs</span></h2>
            <div className='p-1'>
                <Carousel breakPoints={breakPoints}>
                    <img style={{ width: '100px', height: '100px' }} src={apple}></img>
                    <img style={{ width: '100px', height: '100px' }} src={accenture}></img>
                    <img style={{ width: '100px', height: '100px' }} src={dell}></img>
                    <img style={{ width: '100px', height: '100px' }} src={hp}></img>
                    <img style={{ width: '100px', height: '100px' }} src={igenz}></img>
                    <img style={{ width: '100px', height: '100px' }} src={infosys}></img>
                    <img style={{ width: '200px', height: '120px' }} src={sobha}></img>
                    <img style={{ width: '100px', height: '100px' }} src={swiggy}></img>
                    <img style={{ width: '100px', height: '100px' }} src={wipro}></img>
                    <img style={{ width: '100px', height: '100px' }} src={zomato}></img>
                </Carousel>
            </div>
        </div>
    )
}
export default RecruiterPartner