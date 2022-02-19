import QuizCard from "../Components/quizCard";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Welcome({ category }) {
  const { data: session } = useSession();

  const baseUrl =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  if (session) {
    return (
      <div className="bg-cyan-100">
        <h2 className="text-4xl text-center font-medium leading-tight pt-8 pb-4 text-blue-600">
          Please Choose your category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 pb-20">
          {category.map((c) => {
            return <QuizCard key={c.id} quizID={c.id} quizCategory={c.name} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-cyan-100">
        <h2 className="text-4xl text-center font-medium leading-tight pt-8 pb-4 text-blue-600">
          Please Login to continue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 pb-20">
          {category.map((c) => {
            return <QuizCard key={c.id} quizID={c.id} quizCategory={c.name} />;
          })}
        </div>
      </div>
    );
  }
}

export const getStaticProps = async () => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  return {
    props: {
      category: data.trivia_categories,
    },
  };
};
