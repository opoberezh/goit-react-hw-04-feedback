import { ImSmile, ImSad, ImNeutral } from "react-icons/im";
import {ButtonStyled } from "./FeedbackOptions.styled";

export const FeedbackOptions =({options, onLeaveFeedback})=>{
    const icons={
        good: <ImSmile/>,
        bad: <ImSad/>,
        neutral: <ImNeutral/>
    }
return(
    <>
        {options.map(option => (
        <ButtonStyled type="button" key={option} onClick={() => onLeaveFeedback(option)}>{icons[option]}
        </ButtonStyled>
      ))}
    </>
)
}