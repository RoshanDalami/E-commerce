"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";
import SigninForm from "../Components/SigninForm";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import logo from "../../../public/logo.png";
import avatar from '../../../public/assets/avatar.svg'
import login from '../../../public/svgFiles/login.svg'

export default function Profile() {
  const { user, googleSignIn, signout }: any = UserAuth();
  const router = useRouter();
  const [mood, setMood] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onSinginHandler = async () => {
    await googleSignIn();
    toast.success("Login Success");
  };
  const onMoodChange = () => {
    setMood((prevState) => !prevState);
  };

  if (!user) {
    return (
      <>
        <div className="flex  items-center justify-center text-black gap-3 p-5 rounded min-h-screen ">
          <div className="hidden md:block ">
          <Image src={login}  alt=""/>
          </div>
          <div className=" flex items-center justify-center  flex-col gap-3 shadow-lg  md:mt-5 w-full py-10">

            <Image src={logo} alt="" width={100} height={100} />
            <SigninForm />
            <button
              className="bg-white px-4 py-2 rounded-lg border-[1px] border-black/70 flex gap-3 items-center justify-center shadow-lg"
              onClick={onSinginHandler}
            >
              <FcGoogle />
              sign in with google
            </button>
          </div>
        </div>
      </>
    );
  }

  const onSignoutHandler = () => {
    signout();
    toast.success("logout success");
    router.replace("/");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      {
        <>
          <div className="flex items-center justify-center flex-col">
          {user.photoURL ? (
                      <Image
                        src={user?.photoURL}
                        alt="profile Image"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    ) : (
                      <Image
                        src={
                         avatar
                        }
                        alt="avatar"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    )}
            <h1>{user?.displayName}</h1>
            </div>
        </>
      }
      <button
        className="bg-blue-600 px-4 py-2 rounded-lg text-white"
        onClick={onSignoutHandler}
      >
        Sign out
      </button>
    </div>
  );
}
