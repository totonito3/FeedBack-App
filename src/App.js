import { useState } from "react";
import Header from "./components/Header";

import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    console.log("App", id);
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackForm></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
