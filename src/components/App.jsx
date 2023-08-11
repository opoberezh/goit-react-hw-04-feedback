import { Component } from "react"
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from "./Statistic/Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export class App extends Component  {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
    handleFeedback = type => {
      this.setState(prevState =>{
        return{
          [type]: prevState[type] +1
        }
      })
    }
    render(){
      const {good, neutral, bad} = this.state
      const feedbackOptions = Object.keys(this.state)
        return (
          <>
            <div>
             <Section title="Pleas leave feedback"><FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback} />
             </Section>
             
            </div>
            <Section title="Statistics"> <Statistics good={good} neutral={neutral} bad={bad}/>
            </Section>
           
            <GlobalStyle />
          </>
    
  
  );
}
}


// Код до рефакторингу
// export class App extends Component  {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleFeedback = type => {
//     this.setState(prevState =>{
//       return{
//         [type]: prevState[type] +1
//       }
//     })
//   }

//   countTotalFeedback(){
//     const  {good, neutral, bad} = this.state
//     return good + neutral + bad
//   }

//   countPositivFeedbackPercentage(){
//     const {good} = this.state
//     const totalFeedback = this.countTotalFeedback()
//     return totalFeedback === 0 ? 0 : Math.round(good/totalFeedback * 100)
//   }

//   render(){
//     const {good, neutral, bad} = this.state
//     const totalFeedback = this.countTotalFeedback()
//     const positivFeedbackPercentage = this.countPositivFeedbackPercentage()
//      return (
//     <>
//     <div>
//       <h2>Please leave feedback</h2>
//       <button onClick={() => this.handleFeedback('good')}>Good</button>
//       <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
//       <button onClick={() => this.handleFeedback('bad')}>Bad</button>
//     </div>
//     <div>
//       <h2>Statistic</h2>
//       <p>Good: {good}</p>
//        <p>Neutral: {neutral}</p>
//        <p>Bad: {bad} </p>
//        <p>Total: {totalFeedback}</p>
//        <p>Positiv Feedback: {positivFeedbackPercentage}%</p>
//     </div> 
//     <GlobalStyle />
//     </>
    
  
//   );
//   }
 
// };
