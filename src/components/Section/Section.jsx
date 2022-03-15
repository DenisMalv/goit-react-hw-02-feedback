import React, {Component} from 'react'
import css from './Section.module.css'
import propTypes from 'prop-types';

class Section extends Component {
    static propTypes = {
        title: propTypes.string,
        children: propTypes.arrayOf(propTypes.element)
     }
    
    render() {
        const { title,children } = this.props;
        return (
            <>
                {title && <section className={css.feedbackSection}>
                            <h1 className={css.title}>{title}</h1>
                            {children}
                          </section>}
            </>

        )
        
            
    }
} 

export default Section