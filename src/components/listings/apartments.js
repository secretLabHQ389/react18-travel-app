import React, { Suspense, useState, useDeferredValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsersHandler, propertiesSelector } from '../../store/propertySlice'
import Apartments from '../../images/Apartments.png'
import SearchResults from '../UI/SearchResults'
import '../navbar/navbar.scss'
import Button from "../button/Button"

const ApartmentsListing = () => {

  //startTransition for the modules and RTK for the map:
  const [showModal, setShowModal] = useState(true)
  const dispatch = useDispatch()
  const currentProperties = useSelector(propertiesSelector)

  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const getListOfProperties = () => {
    dispatch(getUsersHandler())
  }

  return (
    <div className="nav__container">
      <Button onClick={() => getListOfProperties()}>GET APARTMENTS</Button>
      <>
        {currentProperties && <p>{currentProperties}</p>}
        <label>
          Location of Apartment:
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder={'Enter an AU state'} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={deferredQuery} />
        </Suspense>
      </>
      <img src={Apartments} alt='Apartment interior' />
    </div>
  )
}

export default ApartmentsListing
