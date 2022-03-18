import React from 'react'
import css from './FeedbackOptions.module.css'
import propTypes from 'prop-types'

const FeedbackOptions = ({options,onLeaveFeedback}) => {
        return (
            <ul className={css.buttonsList}>
                {Object.keys(options).map(item =>
                    <li className={css.listItem} key={item}>
                        {<button className={css.button} onClick={onLeaveFeedback}>{ucFirstChar(item)}
                        </button>}
                    </li>)}
            </ul>    
        )}

export default FeedbackOptions

function ucFirstChar(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

FeedbackOptions.propTypes = {
    options: propTypes.shape({
        good:propTypes.number.isRequired,
        neutral:propTypes.number.isRequired,
        bad:propTypes.number.isRequired,
    }),
    onLeaveFeedback:propTypes.func,
}