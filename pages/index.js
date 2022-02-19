import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="text-center bg-slate-100 w-1/2 mx-auto">
      <h1 className="text-4xl font-bold py-1 my-8">Welcome to the Quiz App</h1>
      <p className="text-2xl">
        This is a quiz app that will help you learn about the world.
      </p>

      <p className="text-3xl">
        <Link href="/loginAdmin">
          <a
            className="text-blue-500"
            rel="noopener noreferrer"
          >
            Admin Login
          </a>
        </Link>
      </p>
      <p className="text-3xl">
      <Link href="/loginStudent">
          <a
            className="text-blue-500"
            rel="noopener noreferrer"
          >
           Student Login
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
