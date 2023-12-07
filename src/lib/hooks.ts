import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/FeebackItemsContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not found within FeedbackList component"
    );
  }
  return context;
}
