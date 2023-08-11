
export const Statistics = ({good, neutral, bad }) =>{
    const  totalFeedback = good + neutral + bad
    const positivFeedbackPercentage = totalFeedback === 0 ? 0 : Math.round(good/totalFeedback * 100)
        return(
            <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad} </p>
            <p>Total: {totalFeedback}</p>
            <p>Positiv Feedback: {positivFeedbackPercentage}%</p>
            </> 
            )
}

   
    
