import React from "react";

const QuizQuestionCard = ({ question }) => {
  const answers = [...question.incorrect_answers];
  answers.push(question.correct_answer);
  answers = shuffleArray(answers);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-emerald-500">
        {question.question}
      </h2>

      <div className="flex flex-col justify-center items-center">
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              className="bg-slate-300 mb-4 p-8 w-[50%] border-8 rounded-lg"
            >
              <p className="text-2xl font-semibold text-emerald-500">
                {answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestionCard;
