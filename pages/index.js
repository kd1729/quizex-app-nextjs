import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold py-1 my-8">Welcome to the Quiz App</h1>
      <p className="text-2xl">
        This is a quiz app that will help you learn about the world.
      </p>
      <h2>Please login or signup to continue....</h2>
      <p>
        <Link href="/login">
          <a
            className="text-blue-500"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </Link>
      </p>
      <p>
      <Link href="/signup">
          <a
            className="text-blue-500"
            rel="noopener noreferrer"
          >
            Signup
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
