
import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"
function FeedbackList({feedback, handleDelete}) {

    if (!feedback || feedback.length===0){
        return <p>No FeedBack Yet</p>
    }
    
  return (

    <div className="feedback-list">
        {feedback.map((item=>(<FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>)))}
    </div>
  )
}

FeedbackList.protoTypes={
    feedback: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,})),

}
export default FeedbackList