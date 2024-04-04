import React from 'react'
import './carbon-web.scss'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Button = () => {
  return (

    <>
    <Link to="/">
        <div className="back-link">Go back</div>
      </Link>
    <div className='carbon-web-wrapper'>

<button className='book-a-demo-btn'>Book a Demo<GoArrowRight /></button>
    </div>
    </>
  )
}

export default Button