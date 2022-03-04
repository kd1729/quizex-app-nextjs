import { React, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const LoginStudent = () => {
  // const router = useRouter();
  // const redirectWelcome = () => {
  //   router.push("/quiz");
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const myLoader = ({ src }) => {
    return `https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg`;
  };

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="grid place-items-center h-48 mt-48">
        <div className="text-3xl font-semibold">Signed in as <span className="text-3xl text-sky-600"> {session.user.email}</span></div>
        <Link href="/quiz" passHref>
          <div className="bg-green-500 text-2xl py-2 px-4 text-white font-bold rounded-lg cursor-pointer hover:bg-green-700">
            Take the Quiz
          </div>
        </Link>
        <button
          className="bg-red-500 text-2xl py-2 px-4 text-white font-bold rounded-lg cursor-pointer hover:bg-red-700"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    );
  }

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
                Email
              </span>
              <input
                type="text"
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mt-4 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                Password
              </span>
              <input
                type="text"
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mt-4">
              <button
                className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700"
                onClick={()=>signIn("email", { email, password })}
              >
                Click here to proceed
              </button>
            </div>
          </div>
        </div>
        <div className="google-btn" onClick={() => signIn("google")}>
          <div className="google-icon-wrapper">
            <Image
              loader={myLoader}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
              height={35}
              width={35}
              unoptimized={false}
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
