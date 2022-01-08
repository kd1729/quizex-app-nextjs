import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Popup from "./Popup";

const QuizCard = ({ id, quizCategory }) => {

  const router = useRouter();
  const baseUrl = "https://opentdb.com/api.php";

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const createQuiz = () => {
    const name = document.getElementById("quizName").value;
    const description = document.getElementById("quizDescription").value;
    const difficulty = document.getElementById("quizDifficulty").value;
    const questions = document.getElementById("quizQuestions").value;
    const url = `${baseUrl}?amount=${questions}$category=${id}&difficulty=${difficulty}&type=multiple`;  
       
  }

  return (
    <div id={quizCategory}>
      <input
        type="button"
        className="text-white font-bold h-full w-full bg-rose-500 p-8 rounded-lg cursor-pointer hover:bg-green-600 hover:shadow-lg"
        value={quizCategory}
        onClick={togglePopup}
      />

      {isOpen && (
        <Popup
          content={
            <form onSubmit={createQuiz}>
              <b className="text-xl">Design your Quiz</b>
              <br />

              <label htmlFor="quizName">Quiz Name</label>
              <br />
              <input type="text" name="quizName" id="quizName" />
              <br />

              <label htmlFor="quizDescription">Quiz Description</label>
              <br />
              <input type="text" name="quizDescription" id="quizDescription" />
              <br />

              <label htmlFor="quizQuestions">
                How many questions do you want to have in your quiz?
              </label>
              <br />
              <input id="quizQuestions" name="quizQuestions" type="number" />
              <br />

              <label htmlFor="quizDifficulty">
                Select the difficulty level of your quiz:
              </label>
              <br />
              <select id="quizDifficulty" name="quizDifficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <br />

              <label htmlFor="questionTime">
                How many seconds do you want to have for each question?
              </label>
              <br />
              <input id="questionTime" name="questionTime" type="number" />
              <br />

              <label htmlFor="quizTime">
                How many minutes do you want to have for the quiz?
              </label>
              <br />
              <input id="quizTime" name="quizTime" type="number" />
              <br />

              <input
                type="submit"
                className="popup-submit"
                value="Create Quiz"
              />
            </form>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default QuizCard;

// const baseUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
