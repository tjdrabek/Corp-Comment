import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        onChange={handleChange}
        value={text}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feeback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
