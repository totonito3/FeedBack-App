import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";

import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

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
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
