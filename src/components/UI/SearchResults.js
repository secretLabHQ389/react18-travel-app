import React, { Suspense } from 'react'
import { useDispatch } from 'react-redux'

const AUStates = ['Queensland', 'New South Wales', 'Victoria', 'Tasmania', 'South Australia', 'Western Australia', 'Australian Capitol Territory', 'Northern Territory']

const SearchResults = props => {
  const {query} = props

  return (
    <div>
        <p>Please input entire state name.</p>
        {AUStates && AUStates.map(state => {
            return (
                <div key={Math.random}>
                {query === state && <p>{state} selected</p>}
                </div>
            )
        })}
    </div>
  )
}

export default SearchResults
