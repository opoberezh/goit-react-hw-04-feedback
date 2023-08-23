
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from "./Statistic/Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Layout } from "./Layout/Layout";
import { Notification } from "./Notification/Notification";
import { useState } from 'react';

export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 
 
 const handleFeedback = type => {
 if (type === 'good'){
  setGood(prevGood => prevGood + 1)
 } else if (type === 'neutral' ){
  setNeutral(prevNeutral => prevNeutral + 1)
 } else if (type === 'bad') {
  setBad(prevBad => prevBad + 1)
 }
};

const totalFeedback = good + neutral + bad;
const feedbackOptions = ['good', 'neutral', 'bad'];
    return (
      <Layout>
        
         <Section title="Please leave feedback"><FeedbackOptions options={feedbackOptions} onLeaveFeedback={handleFeedback} />
         </Section>
    
        <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
        </Section>
       
        <GlobalStyle />
      </Layout>


);
}

