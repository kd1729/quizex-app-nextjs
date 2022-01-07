import Link from "next/link";

const QuizCard = ({ quizCategory }) => {
  return (
    <Link href={quizCategory}>
      <div className="bg-rose-500 text-white rounded shadow-lg p-4" key={quizCategory}>
        <h3 className=" text-xl font-semibold text-center">{quizCategory}</h3>
      </div>
    </Link>
  );
};

export default QuizCard;
