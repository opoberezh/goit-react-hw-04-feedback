import { ImSmile, ImSad, ImNeutral } from "react-icons/im";
export const FeedbackOptions =({options, onLeaveFeedback})=>{
    const icons={
        good: <ImSmile/>,
        bad: <ImSad/>,
        neutral: <ImNeutral/>
    }
return(
    <>
        {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>{icons[option]}
        </button>
      ))}
    </>
)
}