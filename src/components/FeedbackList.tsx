import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgetLetter: "B",
    companyName: "ByteGrad",
    feedbackText: "test test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 563,
    badgetLetter: "S",
    companyName: "Starbucks",
    feedbackText: "bla bla bla",
    daysAgo: 3,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
