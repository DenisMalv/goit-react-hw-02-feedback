import React, { Component } from "react";
import propTypes from "prop-types";

import Section from "./Section/Section";
import FeedbackOptions from "./Section/FeedbackOptions/FeedbackOptions";
import Statistics from "./Section/Statistics/Statistics";

class App extends Component {
  static propTypes = {
    state: propTypes.shape({
      Good: propTypes.number.isRequired,
      Neutral: propTypes.number.isRequired,
      Bad: propTypes.number.isRequired,
    }),
    countTotalFeedback: propTypes.func,
    countPositiveFeedbackPercentage: propTypes.func,
    handleButton: propTypes.func,
  }

  
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
    const { state, handleButton, countTotalFeedback, countPositiveFeedbackPercentage } = this
    
    const { Good, Neutral, Bad, } = state
    
    return (
      <>
        <Section title='Please leave Feedback'>
          <FeedbackOptions options={state} onLeaveFeedback={handleButton} />
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>  
    )
  }
}

export default App

