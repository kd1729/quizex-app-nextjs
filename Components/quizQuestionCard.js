import React from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const QuizQuestionCard = ({ question, questionNo}, ref) => {

  const [clicked, setClicked] = React.useState(false);

  const answers = [...question.incorrect_answers];
  answers.push(question.correct_answer);
  answers = shuffleArray(answers);



  const checkAnswer = (answer) => {
    setClicked(!clicked);
    if (answer === question.correct_answer) {
      ref.current += 4;
    } else {
      ref.current -= 1;
    }
  };

  return (
    <div className="w-96">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">
        {questionNo}. {question.question}
      </h2>

      <div className="flex flex-col justify-center ">
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              className="text-l font-semibold text-emerald-600 bg-white mb-4 p-4 w-[50%] border-4 rounded-lg cursor-pointer
                         hover:bg-blue-500 hover:text-white active:bg-blue-700"
              style={{ transition: "all 0.2s ease-in-out", backgroundColor: clicked ? "white" : "" }}
              onClick={() => {checkAnswer(answer)}}
              >
              {index + 1}. {answer}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const forwardRef = React.forwardRef(QuizQuestionCard);

export default forwardRef;
