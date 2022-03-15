import React, {Component} from 'react'
import css from './Section.module.css'

class Section extends Component {
     
    
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