import React, { Component } from "react";
import propTypes from "prop-types";

import Section from "./Section/Section";
import FeedbackOptions from "./Section/FeedbackOptions/FeedbackOptions";
import Statistics from "./Section/Statistics/Statistics";

class App extends Component {
  
  state = {
        good: 0,
        neutral: 0,
        bad: 0, 
  }

   countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, currentItem) => total + currentItem, 0)
    }
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback()
        return Math.round(this.state.good / total * 100)
    }

    handleButton = event => {
      this.setState(prevState => ({
        [event.target.textContent.toLowerCase()]: prevState[event.target.textContent.toLowerCase()] + 1
      }))

        console.log(this.state);
        
    }
    

  render() {
    const { state, handleButton, countTotalFeedback, countPositiveFeedbackPercentage } = this
    
    const { good, neutral, bad, } = state
    
    return (
      <>
        <Section title='Please leave Feedback'>
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleButton} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>  
    )
  }
}

export default App

