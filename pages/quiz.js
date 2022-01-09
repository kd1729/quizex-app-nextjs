import axios from "axios";
import { useState, useEffect } from "react";

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);

  const url =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get(url);
      setQuiz(response.data.results);
    }
    fetchQuestions();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-600">
      <h1 className="text-3xl">Quiz</h1>
      <div>
        {quiz.map((question, index) => {
          return (
            <div key={index} className="w-1/2 flex flex-col justify-center  items-center bg-slate-300">
              <h2 className="text-xl">
                {index + 1}. {question.question}
              </h2>
              <ul>
                <li> {question.correct_answer}</li>
                <li> {question.incorrect_answers[0]}</li>
                <li> {question.incorrect_answers[1]}</li>
                <li> {question.incorrect_answers[2]}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
