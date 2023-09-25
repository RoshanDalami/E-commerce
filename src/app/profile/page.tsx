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
        <div className="flex flex-col items-center justify-center text-black gap-3 p-10 ">
          <div className="border-2 border-gray-500 p-10 rounded flex items-center justify-center flex-col gap-3">
            <Image src={logo} alt="" width={100} height={100} />
            <SigninForm />
            <button
              className="bg-white px-4 py-2 rounded-lg border-[1px] border-black/70 flex gap-3 items-center justify-center"
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
    <div className="flex flex-col items-center justify-center gap-6">
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
