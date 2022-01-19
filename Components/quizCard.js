import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Popup from "./Popup";

const QuizCard = ({ quizID, quizCategory }) => {

  const router = useRouter();
  const baseUrl = "https://opentdb.com/api.php";

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const [perQuestionScore, setPerQuestionScore] = useState();
  const [negativeScore, setNegativeScore] = useState();
  const [perQuestionTime, setPerQuestionTime] = useState();
  const [timeLimit, setTimeLimit] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const createQuiz = (e) => {
    e.preventDefault();
    const data = {
      quizID,
      name,
      description,
      difficulty,
      type,
      numberOfQuestions,
      perQuestionScore,
      negativeScore,
      perQuestionTime,
      timeLimit,
    };
    
  }


  return (
    <div id={quizID}>
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
              <b  className="text-xl text-emerald-600"> Category selected : {quizCategory}  ({quizID})</b> <br/>
              <b className="text-xl text-emerald-900">Design your Quiz</b>
              <br />
              <br />

              <label className="font-semibold" htmlFor="quizName">Quiz Name</label>
              <br />
              <input
                type="text"
                id="quizName"
                className="w-full p-2 rounded-lg"
                placeholder="Quiz Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <label htmlFor="quizDescription">Quiz Description</label>
              <br />

              <input
                type="text"
                id="quizDescription"
                className="w-full p-2 rounded-lg"
                placeholder="Quiz Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />

              <label htmlFor="quizQuestions">
                How many questions do you want to have in your quiz?
              </label>
              <br />

              <input
                type="number"
                id="quizQuestions"
                className="w-full p-2 rounded-lg"
                placeholder="Number of Questions"
                required
                onChange={(e) => setNumberOfQuestions(e.target.value)}
              />
              <br />

              <label htmlFor="quizDifficulty">
                Select the difficulty level of your quiz:
              </label>
              <br />
              
              <select
                id="quizDifficulty"
                className="w-full p-2 rounded-lg"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="any">Any</option>
              </select>
              <br />

              <label htmlFor="quizType">
                Select the type of your quiz:
              </label>
              <br />

              <select
                id="quizType"
                className="w-full p-2 rounded-lg"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True or False</option>
                <option value="any">Any</option>
              </select>

              <label htmlFor="questionTime">
                How many seconds do you want to have for each question?
              </label>
              <br />
              
              <input
                type="number"
                id="questionTime"
                className="w-full p-2 rounded-lg"
                placeholder="Time per Question"
                onChange={(e) => setPerQuestionTime(e.target.value)}
              />
              <br />

              <label htmlFor="quizTime">
                How many minutes do you want to have for the quiz?
              </label>
              <br />

              <input
                type="number"
                id="quizTime"
                className="w-full p-2 rounded-lg"
                placeholder="Time Limit"
                required
                onChange={(e) => setTimeLimit(e.target.value)}
              />
              <br />

              <label htmlFor="questionScore">
                How many points do you want to give for each question?
              </label>
              <br />

              <input 
                type="number"
                id="questionScore"
                className="w-full p-2 rounded-lg"
                placeholder="Score per Question"
                required
                onChange={(e) => setPerQuestionScore(e.target.value)}
              />

              <label htmlFor="negativeScore">
                How many points do you want to take away for each wrong answer?
              </label>
              <br />

              <input
                type="number"
                id="negativeScore"
                className="w-full p-2 rounded-lg"
                placeholder="Negative Score"
                onChange={(e) => setNegativeScore(e.target.value)}  
              />
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
