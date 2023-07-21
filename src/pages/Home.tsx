import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import ApartmentsListing from '../components/listings/apartments';
import LandingPage from './LandingPage';
import { selectedPropertySelector } from '../store/propertySlice';

//@ts-check

function Home() {
  const currentProperty = useSelector(selectedPropertySelector)
  return (
    <>
      <Navbar />
      {currentProperty === 'Welcome! Pick a Category to Begin!' && <LandingPage />}
      {currentProperty === 'Apartments' && <ApartmentsListing />}
    </>
  );
}

export default Home;