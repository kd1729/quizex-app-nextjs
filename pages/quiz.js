import axios from "axios";
import { useState, useEffect } from "react";
import QuizQuestionCard from "../Components/quizQuestionCard";

const Quiz = () => {

  const [state, setState] = useState({
    questions: [],
    currentQuestion: 0,
    score: 0,
    isLoading: true,
    isFinished: false,
  });

  const { questions, currentQuestion, score, isLoading, isFinished } = state;

  // const [quiz, setQuiz] = useState([]);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isFinished, setIsFinished] = useState(false);

  const url =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get(url);
      setState({
        ...state,
        questions: response.data.results,
        isLoading: false,
      });
    }
    fetchQuestions();
  }, []);

  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl font-bold text-center text-black py-6">Quiz</h1>

      {isLoading ? (
        <div className="spinner-border text-emerald-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          {isFinished ? (
            <div className="text-center">
              <h1 className="text-xl font-bold text-center text-white py-6">
                You scored {score} out of 10
              </h1>
            </div>
          ) : (
            <>
              <div className="bg-slate-300 p-8 border-4 rounded-lg">
                <QuizQuestionCard
                  question={questions[currentQuestion]}
                  state={state}
                  setState={setState}
                />
              </div>

              <div>
                <div className="flex justify-between mt-4">
                  {currentQuestion !== 0 ? (
                  <button 
                    className="bg-slate-300 p-4 border-4 rounded-lg"
                    onClick={() => {
                      setState({
                        ...state,
                        currentQuestion: currentQuestion - 1,
                      });
                    }}
                  >
                    Previous
                  </button>
                  ) : (
                    <button 
                    className="bg-transparent text-white p-4">
                      Previous
                    </button>

                  )}


                  {currentQuestion !== 9 ? (
                  <button 
                    className="bg-slate-300 p-4 border-4 rounded-lg"
                    onClick={() => {
                      setState({
                        ...state,
                        currentQuestion: currentQuestion + 1,
                      });
                    }}
                  >
                    Next
                  </button>
                  ) : (
                    <button
                      className="bg-slate-300 p-4 border-4 rounded-lg"
                      onClick={() => {
                        setState({
                          ...state,
                          isFinished: true,
                        });
                      }}
                    >
                      Finish
                    </button>  
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;

{
  /* <div className=" flex flex-col justify-center items-center">
  {quiz.map((question, index) => {
    return (
      <div
        key={index}
        className="bg-slate-300 mb-4 p-8 w-[40%] border-8 rounded-lg"
      >
        <QuizQuestionCard question={question} />
      </div>
    );
  })}
</div>; */
}
