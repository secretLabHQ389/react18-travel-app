import React, { useEffect } from 'react';
import CircleType from 'circletype'
import CityLivin from '../images/CityLivin.png'
import './pages.scss'

//@ts-check

const LandingPage = () => {

    useEffect(() => {
      const circleTypeTitle = new CircleType(document.getElementById('title'))
      circleTypeTitle.radius(330)
      const circleTypeSubTitle = new CircleType(document.getElementById('subtitle'))
      circleTypeSubTitle.radius(200)
    }, [])

  return (
    <div className={'hostel-hangout'}>
      <h1 id='title' className={'welcome-notice centered'}>Travel App</h1>
      <h3 id='subtitle' className={'welcome-notice-slogan centered'}>Come hang out with us!</h3>
      <img className={'hostel-hangout'} src={CityLivin} alt='urbanApartment' />
    </div>
  );
}

export default LandingPage;