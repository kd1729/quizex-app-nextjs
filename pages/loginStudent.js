import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const LoginStudent = () => {
  const router = useRouter();
  const redirectWelcome = () => {
    router.push("/quiz");
  };

  const myLoader = ({ src }) => {
    return `https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg`;
  };

  return (
    <div className="py-20 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
        <div className="md:flex">
          <div className="w-full p-3 px-6 py-10">
            <div className="text-center">
              <span className="text-4xl text-gray-700">Student Login</span>
            </div>
            <div className="mt-8 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                Username or Email
              </span>
              <input
                type="text"
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="mt-4 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                Password
              </span>
              <input
                type="text"
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
              />
            </div>
            <div className="mt-4">
              <button
                className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700"
                onClick={redirectWelcome}
              >
                Click here to proceed
              </button>
            </div>
          </div>
        </div>
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <Image
              loader={myLoader}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
              height={35}
              width={35}
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginStudent;
