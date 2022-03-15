import React from 'react'
import css from './Notification.module.css'
import propTypes from 'prop-types'

const Notification = ({ message }) => {
    return <p className={css.message}>{ message }</p>
}

export default Notification


Notification.propTypes = {
    message: propTypes.string
}
