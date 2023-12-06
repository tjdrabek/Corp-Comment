import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackItem({ feedbackItem }) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgetLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.feedbackText}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
