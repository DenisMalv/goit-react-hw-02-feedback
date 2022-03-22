import React from 'react'
import css from './FeedbackOptions.module.css'
import propTypes from 'prop-types'
import ucFirstChar from '../../utils/common'

const FeedbackOptions = ({options,onLeaveFeedback}) => {
        return (
            <ul className={css.buttonsList}>
                {options.map(item =>
                    <li className={css.listItem} key={item}>
                        {<button className={css.button} onClick={onLeaveFeedback}>
                            {ucFirstChar(item)}
                        </button>}
                    </li>)}
            </ul>    
        )}

export default FeedbackOptions


FeedbackOptions.propTypes = {
    options:propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback:propTypes.func.isRequired,
}