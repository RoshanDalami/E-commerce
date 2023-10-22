import { PaperClipIcon } from '@heroicons/react/20/solid'
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

export default function NewProfile() {
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
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Welcome Back</h3>
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
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{user?.displayName}</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.displayName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
