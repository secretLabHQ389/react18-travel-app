import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import ApartmentsListing from '../components/listings/apartments';
import { selectedPropertySelector } from '../store/propertySlice';

function Home() {
  const currentProperty = useSelector(selectedPropertySelector)
  return (
    <>
      <Navbar />
      {currentProperty === 'Nothing' && <div>Welcome!</div>}
      {currentProperty === 'Apartments' && <ApartmentsListing />}
    </>
  );
}

export default Home;