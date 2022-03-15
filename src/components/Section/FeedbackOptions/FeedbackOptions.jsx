import React from 'react'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options,onLeaveFeedback}) => {
        return (
            <ul className={css.buttonsList}>
                {Object.keys(options).map(item =>
                    <li className={css.listItem} key={item}>
                        {<button className={css.button} onClick={onLeaveFeedback}>{item}
                        </button>}
                    </li>)}
            </ul>    
        )}

export default FeedbackOptions