"use client";
import { FormEvent, useState } from "react";
import { auth } from "@/app/firebase/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SigninForm() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user) {
          setUserDetails({
            username: "",
            email: "",
            password: "",
          });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <main className=" flex  items-center justify-center">
      <div className="w-[600px]  rounded-lg flex flex-col gap-6">
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              email
            </label>
            <input
              className="px-4 py-2 rounded-md ring-1 ring-gray-500"
              type="email"
              name="email"
              placeholder="weugly@weugly.in"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg ">
              password
            </label>
            <input
              className="px-4 py-2 rounded-md  ring-1 ring-gray-500"
              type="password"
              name="password"
              placeholder="******"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              required
            />
          </div>
          <button
            className="bg-blue-600 py-2 text-white rounded-md"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center justify-center">
          <p className=" opacity-60">create an account {"->"} </p>
          <Link href={"/signup"}>
            <span className="font-bold text-[#793FDF] cursor-pointer ">
              {" "}
              sign up
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
