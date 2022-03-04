import axios from "axios";
import { useState, useEffect, useRef } from "react";
import QuizQuestionCard from "../Components/quizQuestionCard";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginStudent from "./loginStudent";

const Quiz = () => {
  // console.log(props);
  const { data: session } = useSession();

  const score = useRef(0);
  const correctAnswers = useRef([]);
  const userAnswers = useRef(Array(10).fill(""));

  const [state, setState] = useState({
    questions: [],
    currentQuestion: 0,
    isLoading: true,
    isFinished: false,
    started: false,
    timeLeft: 10,
  });

  const {
    questions,
    currentQuestion,
    isLoading,
    isFinished,
    started,
    timeLeft,
  } = state;

  const url =
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

  // making the timer
  useEffect(() => {
    if(!started) return;
    const interval = null;
    if (timeLeft > 0) {
      interval = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          timeLeft: prevState.timeLeft - 1,
        }));
      }, 1000);
    } else if (currentQuestion < 9) {
      clearInterval(interval);
      setState((prevState) => ({
        ...prevState,
        currentQuestion: prevState.currentQuestion + 1,
        timeLeft: 10,
      }));
    } else {
      clearInterval(interval);
      calculateScore();
      setState((prevState) => ({
        ...prevState,
        isFinished: true,
      }));
    }
    return () => clearInterval(interval);
  }, [currentQuestion, timeLeft, started]);

  // Fetching questions from the API and assigning it to the state
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(url);
      setState((prevState) => ({
        ...prevState,
        questions: response.data.results,
        isLoading: false,
      }));
    };
    fetchQuestions();
  }, []);

  // making correct answers array
  useEffect(() => {
    questions.map((question) => {
      correctAnswers.current.push(question.correct_answer);
    });
    console.log(correctAnswers);
  }, [questions]);

  // Caculating the score by comparing the user answers with correct answers
  const calculateScore = () => {
    userAnswers.current.map((answer, index) => {
      if (answer === "") {
        score.current += 0;
      } else if (answer === correctAnswers.current[index]) {
        score.current += 1;
      } else {
        score.current += -1;
      }
    });
    return;
  };

  if (!session) {
    return <LoginStudent />;
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-semibold text-emerald-800">
          You scored {score.current} out of {questions.length}
        </h1>
        {/* Uncomment the below section to have a option of restarting the quiz */}
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setState({
              ...state,
              currentQuestion: 0,
              isFinished: false,
              started: false,
              user: userAnswers,
            });
            score.current = 0;
          }}
        >
          Restart
        </button> */}
        <button
          className="bg-red-500 text-2xl py-2 px-4 mt-8 text-white font-bold rounded-lg cursor-pointer hover:bg-red-700"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-3xl font-semibold">
          Signed in as
          <span className="text-3xl text-sky-600"> {session.user.email}</span>
        </div>
        <button
          className="bg-red-500 text-2xl py-2 px-4 mb-8 text-white font-bold rounded-lg cursor-pointer hover:bg-red-700"
          onClick={signOut}
        >
          Sign Out
        </button>

        <h1 className="text-4xl font-semibold text-emerald-800 mb-4">Quiz</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setState({
              ...state,
              started: true,
            });
          }}
        >
          Start
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid place-items-center">
      <div className="text-3xl font-semibold mt-8">
        Signed in as
        <span className="text-3xl text-sky-600"> {session.user.email}</span>
      </div>

      <h1 className="text-3xl font-bold text-center text-black py-6">Quiz</h1>
      <div className="bg-emerald-500 text-white px-4 py-2 my-8 text-3xl font-bold rounded-md">
        Time Left :<span id="timer"> {timeLeft} </span>
      </div>
      <div>
        <div className="bg-slate-300 p-8 border-4 rounded-lg">
          <QuizQuestionCard
            questionNo={currentQuestion + 1}
            question={questions[currentQuestion]}
            userAnswers={userAnswers}
          />
        </div>
        <div>
          <div className="flex justify-between mt-4">
            
              <button
                className="bg-lime-600 p-4 border-4 rounded-lg hover:bg-lime-800 text-white font-semibold"
                disabled = {currentQuestion === 0 ?  true : false}
                style={{ cursor : currentQuestion === 0 ?  'not-allowed' : 'pointer'}}
                onClick={() => { 
                  setState({
                    ...state,
                    currentQuestion: currentQuestion - 1,
                  });
                }}
              >
                Previous
              </button>
            
            {currentQuestion !== 9 ? (
              <button
                className="bg-lime-600 p-4 border-4 rounded-lg hover:bg-lime-800  font-semibold text-white"
                onClick={() => {
                  setState({
                    ...state,
                    currentQuestion: currentQuestion + 1,
                    timeLeft: 10,
                  });
                }}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-lime-600 p-4 border-4 rounded-lg hover:bg-lime-800 text-white font-semibold"
                onClick={() => { 
                  calculateScore();
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
      </div>
    </div>
  );
};

export default Quiz;
