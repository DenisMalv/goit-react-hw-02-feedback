import React,{Component} from 'react'
import css from './Feedback.module.css'
import Buttons from 'components/Feedback/Buttons'
import Statistics from 'components/Feedback/Statistics'

class Feedback extends Component {
    // static 
        
    // static propTypes = {
        
    // }
    
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0, 
    }
    
    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, currentItem) => total + currentItem, 0)
    }
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback()
        return Math.round(this.state.Good / total * 100)
    }

    handleButton = event => {
        switch (event.target.textContent) {
            case 'Good':
                this.setState(prevState => ({ Good: prevState.Good + 1 }))
                break;
            case 'Neutral':
                this.setState(prevState => ({ Neutral: prevState.Neutral + 1 }))
                break;
            case 'Bad':
                this.setState(prevState => ({ Bad: prevState.Bad + 1 }))
                break;
            default:
        }
        console.log(this.state);
    }


    render() {
        const {state, handleButton,countTotalFeedback,countPositiveFeedbackPercentage } = this
        return (
            <>
                <h1>Please leave Feedback</h1>
                <Buttons state={state} onHandleButton={ handleButton }/>
                <Statistics state={state} total={countTotalFeedback()} positivePersentage={countPositiveFeedbackPercentage()} />

            </>    
        )
        
    }
}

export default Feedback