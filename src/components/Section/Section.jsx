import React from 'react'
import css from './Section.module.css'
import propTypes from 'prop-types';

const Section = ({ title,children }) => {
    return (
                <>
                    {title && <section className={css.feedbackSection}>
                                <h1 className={css.title}>{title}</h1>
                                {children}
                            </section>}
                </>
            )
}

Section.propTypes = {
        title: propTypes.string,
        children: propTypes.arrayOf(propTypes.element)
}

export default Section