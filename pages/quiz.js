import axios from "axios";
import { useState, useEffect } from "react";
import QuizQuestionCard from "../Components/quizQuestionCard";

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
    <div className="bg-slate-600">
      <h1 className="text-3xl font-bold text-center text-white py-6">Quiz</h1>
      <div className=" flex flex-col justify-center items-center">
        {quiz.map((question, index) => {
          return (
            <div key={index} className="bg-slate-300 mb-4 p-8 w-[50%] border-8 rounded-lg">
              <QuizQuestionCard question={question} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
