import React from "react";
import css from './Statistics.module.css'
import Notification from '../Notification/Notification'
import propTypes from "prop-types";

const Statistics = ({ good,neutral,bad, total, positivePercentage }) => {
    return (
        <>
            <h2 className={ css.title }>Statistics</h2>            
            {total  ? <ul className={css.feedbackCountList}>
                            <li className={css.feedbackItem} key={"good"}>
                                {<p className={css.value}>{`Good: ${good} `}</p>}
                            </li>
                            <li className={css.feedbackItem} key={"neutral"}>
                                {<p className={css.value}>{`Neutral: ${neutral} `}</p>}
                            </li>
                            <li className={css.feedbackItem} key={"bad"}>
                                {<p className={css.value}>{`Bad: ${bad} `}</p>}
                            </li>
                            <li className={css.feedbackItem} key={'total'}>
                                {<p className={css.value}>{`Total: ${total} `}</p>}
                            </li>
                            <li className={css.feedbackItem} key={'positivePersentage'}>
                                {<p className={css.value}>{`Positive feedback: ${positivePercentage} %`}</p>}
                            </li>
                        </ul>
                    : <Notification message='No feedback given'/>
            }            
        </>
    )
}
    
export default Statistics

Statistics.propTypes = {
    good:propTypes.number.isRequired,
    neutral:propTypes.number.isRequired,
    bad:propTypes.number.isRequired,
    total:propTypes.number.isRequired,
    positivePercentage:propTypes.number.isRequired,
}


// {Object.keys(state).map(item =>
//                             <li className="feedbackItem" key={item}>
//                                 <p className="value">{`${item} : ${state[item]}`}</p>
//                             </li>)
//                         }