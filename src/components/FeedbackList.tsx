import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    feedbackText: "test test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 563,
    badgeLetter: "S",
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
