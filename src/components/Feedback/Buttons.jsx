import React from 'react'
import css from './Buttons.module.css'

const Buttons = ({state,onHandleButton}) => {
        return (
            <ul className={css.buttonsList}>
                {Object.keys(state).map(item =>
                    <li className={css.listItem} key={item}>
                        {<button className={css.button} onClick={onHandleButton}>{item}
                        </button>}
                    </li>)}
            </ul>    
        )}

export default Buttons