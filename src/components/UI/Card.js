import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

function Card (props) {
  const classes = 'card ' + props.className
  return (
        <div className={classes}>
            {props.children}
        </div>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default Card
