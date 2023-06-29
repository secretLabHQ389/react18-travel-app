import React from 'react'
import './CssExs.scss'
import NicePecs from '../../assets/nosaggypecshere.jpg'

const CssExs = () => {
  return (
    <>
      <div className={'grid'}>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
      </div>

      <img className={'masked'} src={NicePecs} alt='ghost porn' />

      <div className={'manual-center'} />

      <div className={'align-vertically'}>Vertically align flexbox.</div>
    </>
  )
}

export default CssExs
