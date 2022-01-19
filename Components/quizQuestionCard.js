/* eslint-disable react/display-name */
import React, { useEffect } from "react";

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

const QuizQuestionCard = ({ question, questionNo, userAnswers }) => {
  const answers = [...question.incorrect_answers];
  answers.push(question.correct_answer);
  // answers = shuffleArray(answers);

  function htmlToText(html) {
    var temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent; 
}

  const [selectedID, setSelectedID] = React.useState(-1);

  useEffect(() => {
    setSelectedID(-1);
  }, [question]);


  return (
    <div className="w-96">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">
        {questionNo}. {htmlToText(question.question)}
      </h2>

      <div className="flex flex-col justify-center ">
        {answers.map((answer, index) => {
          return (
            <div
              key={index}
              className="text-l font-semibold text-emerald-600 bg-white mb-4 p-4 w-[50%] border-4 rounded-lg cursor-pointer
                         hover:bg-blue-500 hover:text-white active:bg-blue-700"
              style={{
                backgroundColor: selectedID === index ? "#FFF47D" : "",
              }}
              onClick={() => {
                userAnswers.current[questionNo - 1] = answers[index];
                setSelectedID(index);
              }}
            >
              {index + 1}. {answer}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestionCard;
