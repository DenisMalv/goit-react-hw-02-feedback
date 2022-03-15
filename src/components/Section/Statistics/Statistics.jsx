import React from "react";
import css from './Statistics.module.css'
import Notification from '../Notification/Notification'

const Statistics = ({ good,neutral,bad, total, positivePercentage }) => {
    return (
        <>
            <h2 className={ css.title }>Statistics</h2>            
            {total  ? <ul className={css.feedbackCountList}>
                            <li className="feedbackItem" key={"good"}>
                                {<p className="value">{`Good: ${good} `}</p>}
                            </li>
                            <li className="feedbackItem" key={"neutral"}>
                                {<p className="value">{`Neutral: ${neutral} `}</p>}
                            </li>
                            <li className="feedbackItem" key={"bad"}>
                                {<p className="value">{`Bad: ${bad} `}</p>}
                            </li>
                            <li className="feedbackItem" key={'total'}>
                                {<p className="value">{`Total: ${total} `}</p>}
                            </li>
                            <li className="feedbackItem" key={'positivePersentage'}>
                                {<p className="value">{`Positive feedback: ${positivePercentage} %`}</p>}
                            </li>
                        </ul>
                    : <Notification message='No feedback given'/>
            }            
        </>
    )
}
    
export default Statistics


// {Object.keys(state).map(item =>
//                             <li className="feedbackItem" key={item}>
//                                 <p className="value">{`${item} : ${state[item]}`}</p>
//                             </li>)
//                         }