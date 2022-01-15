import axios from "axios";
import { useState, useEffect, useRef } from "react";
import QuizQuestionCard from "../Components/quizQuestionCard";

const Quiz = () => {
  const timeLeft = 10;
  const score = useRef(0);

  const [state, setState] = useState({
    questions: [],
    currentQuestion: 0,
    isLoading: true,
    isFinished: false,
  });

  const { questions, currentQuestion, isLoading, isFinished } = state;

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
                You scored {score.current} marks.
              </h1>
            </div>
          ) : (
            <>
              Time : <span id="timer">{timeLeft}</span>
              <div className="bg-slate-300 p-8 border-4 rounded-lg">
                <QuizQuestionCard
                  questionNo={currentQuestion + 1}
                  question={questions[currentQuestion]}
                  // state={state}
                  // setState={setState}
                  ref={score}
                />
              </div>
              <div>
                <div className="flex justify-between mt-4">
                  {currentQuestion !== 0 ? (
                    <button
                      className="bg-slate-300 p-4 border-4 rounded-lg hover:bg-slate-500 hover:text-white"
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
                    <button className="bg-transparent text-white p-4">
                      Previous
                    </button>
                  )}

                  {currentQuestion !== 9 ? (
                    <button
                      className="bg-slate-300 p-4 border-4 rounded-lg hover:bg-slate-500 hover:text-white"
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
                      className="bg-slate-300 p-4 border-4 rounded-lg hover:bg-slate-500 hover:text-white"
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
