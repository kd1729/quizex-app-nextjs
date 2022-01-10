import React, {useRef} from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const QuizQuestionCard = ({ question, questionNo }) => {
  const answers = [...question.incorrect_answers];
  answers.push(question.correct_answer);
  answers = shuffleArray(answers);

  

  



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
              className="bg-slate-100 mb-4 p-4 w-[50%] border-4 rounded-lg cursor-pointer"
            >
              <p className="text-l font-semibold text-emerald-600">
              {index+1}.  {answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestionCard;
