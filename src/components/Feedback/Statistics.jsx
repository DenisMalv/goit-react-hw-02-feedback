import React from "react";
import css from './Statistics.module.css'

const Statistics = ({ state, total, positivePersentage }) => {
    return (
        <>
            <h2>Statistics</h2>            
            {total  ? <ul className="feedbackCountList">{
                        Object.keys(state).map(item =>
                            <li className="feedbackItem" key={item}>
                                <p className="value">{`${item} : ${state[item]}`}</p>
                            </li>)
                        }
                        <li className="feedbackItem" key={'totalCount'}>
                            {<p className="value">{`Total: ${total} `}</p>}
                        </li>
                        <li className="feedbackItem" key={'positivePercentage'}>
                            {<p className="value">{`Positive feedback: ${positivePersentage} %`}</p>}
                        </li>
                        </ul>
                    : 'No feedback given'
            }            
        </>
    )
}
    
export default Statistics