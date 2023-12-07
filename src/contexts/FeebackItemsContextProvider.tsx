import { createContext, useState, useMemo } from "react";
import { TFeedbackItem } from "../lib/types";
import { useFeedbackItems } from "../lib/hooks";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  feedbackItems: TFeedbackItem[];
  filteredFeedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const { feedbackItems, isLoading, errorMessage, setFeedbackItems } =
    useFeedbackItems();
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((item, index, array) => {
          return array.indexOf(item) === index;
        }),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((feedbackItem) => {
            return feedbackItem.company === selectedCompany;
          })
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        filteredFeedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
