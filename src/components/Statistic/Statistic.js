import { StatDesc, Style } from "./Ststistic.styled";

export const Statistics = ({good, neutral, bad }) =>{
    const  totalFeedback = good + neutral + bad
    const positivFeedbackPercentage = totalFeedback === 0 ? 0 : Math.round(good/totalFeedback * 100)
        return(
            <>
            <StatDesc>Good: <Style>{good}</Style></StatDesc>
            <StatDesc>Neutral: <Style>{neutral}</Style></StatDesc>
            <StatDesc>Bad: <Style>{bad}</Style></StatDesc>
            <StatDesc>Total: <Style>{totalFeedback}</Style></StatDesc>
            <StatDesc>Positive Feedback: <Style>{positivFeedbackPercentage}%</Style></StatDesc>
            </> 
            )
}

   
    
