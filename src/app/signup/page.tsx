"use client";
import { FormEvent, useState } from "react";
import { auth } from "@/app/firebase/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

export default function SignupForm() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
   await updateProfile(user,{displayName:userDetails.username})
    console.log(user)
    setUserDetails({
        username: "",
        email: "",
        password: "",
    });
    router.push('/')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    
  };
  return (
    <main className=" flex h-[90vh] items-center justify-center">
      <div className="w-[600px] bg-[#D8B4F8] p-24 rounded-lg flex flex-col gap-6">
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-lg">
              username
            </label>
            <input
              className="px-4 py-2 rounded-md"
              type="text"
              name="username"
              value={userDetails.username}
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              email
            </label>
            <input
              className="px-4 py-2 rounded-md"
              type="email"
              name="email"
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
              className="px-4 py-2 rounded-md"
              type="password"
              name="password"
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
            <p className=" opacity-60">Already have an account {'->'}  </p>
              <Link href={'/profile'}>
            <span className="font-bold text-[#793FDF] cursor-pointer ">{" "}sign in</span>
              </Link>
        </div>
      </div>
    </main>
  );
}
