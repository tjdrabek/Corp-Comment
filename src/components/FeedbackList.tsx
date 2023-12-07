import FeedbackItem from "./FeedbackItem";
import { useEffect, useState } from "react";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedbackItems(data.feedbacks);
      });
  }, []);
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
