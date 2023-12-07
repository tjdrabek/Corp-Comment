import { useFeedbackItemsContext } from "../../lib/hooks";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  console.log("HashtagList rendering...");
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          company={company}
          onSelectCompany={handleSelectCompany}
          key={company}
        />
      ))}
    </ul>
  );
}
