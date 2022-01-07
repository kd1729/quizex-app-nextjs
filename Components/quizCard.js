import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Popup from "./Popup";

const QuizCard = ({ id, quizCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const myQuiz = (id) => {
    console.log(id);
    console.log(quizCategory);
  };

  return (
    <div className="bg-rose-500 rounded shadow-lg p-4" id={quizCategory}>
      <input
        type="button"
        className="h-full w-full bg-amber-300"
        value={quizCategory}
        onClick={togglePopup}
      />

      <h3 className="text-white text-xl font-semibold text-center">
        {quizCategory}
      </h3>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Design your Quiz</b>
              <br />
              <label>
                How many questions do you want to have in your quiz?
              </label>
              <br />
              <input type="number" />
              <br />

              <label>Select the difficulty level of your quiz:</label>
              <br />
              <select>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <br />

              <label>
                How many seconds do you want to have for each question?
              </label>
              <br />
              <input type="number" />
              <br />

              <label>How many minutes do you want to have for the quiz?</label>
              <br />
              <input type="number" />
              <br />

              <button>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default QuizCard;

// const baseUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
