import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsersHandler } from '../../store/propertySlice'
import Apartments from '../../images/Apartments.png'
import '../navbar/navbar.scss'
import Button from "../button/Button"

const ApartmentsListing = () => {

  //startTransition for the modules and RTK for the map:
  const [showModal, setShowModal] = useState(true)
  const dispatch = useDispatch()

  const getListOfProperties = () => {
    dispatch(getUsersHandler())
  }

  return (
    <div className="nav__container">
      <Button onClick={() => getListOfProperties()}>GET APARTMENTS</Button>
      <img src={Apartments} alt='Apartment interior' />
    </div>
  )
}

export default ApartmentsListing
