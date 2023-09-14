"use client";
import { FormEvent,useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import {setDoc,doc} from 'firebase/firestore'
import { db } from "../firebase/config";

const pin_code = [
  "416501",
  "508207",
  "509105",
  "521324",
  "524002",
  "534330",
  "534331",
  "534338",
  "560003",
  "560013",
  "560050",
  "560051",
  "560053",
  "560054",
  "560055",
  "560056",
  "560057",
  "560058",
  "560059",
  "560064",
  "560080",
  "560085",
  "560091",
  "560092",
  "560096",
  "560097",
  "560098",
  "561203",
  "562120",
  "562157",
  "572123",
  "573216",
  "574154",
  "574238",
  "577139",
  "577526",
  "577528",
  "577556",
  "582112",
  "582208",
  "584116",
  "585312",
  "586213",
  "587122",
  "591120",
  "591221",
  "761028",
];

export default function AddressForm() {
  const {user}:any = UserAuth();
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "Bangalore",
    state: "Karnataka",
    postal: "",
  });
  const [validNumber, setValidNumber] = useState(true);
  const [invalidPinCode, setInvalidPinCode] = useState(false);

  const findPinCode = (pincode: string) => {
   return pin_code.find((pin)=>pin===pincode)
  };


  const onSubmitHandler = async(e: FormEvent) => {
    e.preventDefault();
    try {
      const uid =  user?.uid
      if (details.phone.length !== 10) {
        setValidNumber(false);
        return;
      }
      const valid = findPinCode(details.postal);
      if(valid === undefined){
        setInvalidPinCode(true)
        return;
      }else{
        setInvalidPinCode(false)
      }
      const dbRef = doc(db,'address',uid);
      await setDoc(dbRef,{details,uid});
      setInvalidPinCode(false);
      setValidNumber(true);
      console.log(details+ 'posted to database');
      setDetails({
        fullname: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "Bangalore",
        state: "Karnataka",
        postal: "",
      });
    } catch (error) {
      console.log('error'+ error)
    }
  };

  return (
    <main className="flex flex-col gap-2  ">
      <div className="text-2xl font-semibold">Shipping Details</div>
      <div className="">
        <form action="" className="flex flex-col gap-3 items-center justify-center">
          <div className="flex flex-col">
            <label htmlFor="">Full Name</label>
            <input
              className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
              type="text"
              placeholder="fullname"
              onChange={(e) => {
                setDetails({ ...details, fullname: e.target.value });
              }}
              value={details.fullname}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
              type="text"
              placeholder="email"
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
              value={details.email}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone Number</label>
            <input
              className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
              type="number"
              placeholder="phone number"
              onChange={(e) => {
                setDetails({ ...details, phone: e.target.value });
              }}
              value={details.phone}
              required
            />
            {validNumber ? (
              ""
            ) : (
              <p className="text-red-600 ">please enter valid number</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-2xl font-semibold">
              Shipping Address
            </label>
            <div className="flex flex-col">
              <label htmlFor="">Address 1</label>
              <input
                className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
                type="text"
                onChange={(e) => {
                  setDetails({ ...details, address1: e.target.value });
                }}
                value={details.address1}
                placeholder="Street Address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Address 2</label>
              <input
                className="px-4 py-1 border-[1px] border-gray-700 rounded-lg placeholder:text-[12px]"
                type="text"
                onChange={(e) => {
                  setDetails({ ...details, address2: e.target.value });
                }}
                value={details.address2}
                placeholder="Street Address Line 2 (Optional)"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">City</label>
              <input
                className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
                type="text"
                onChange={(e) => {
                  setDetails({ ...details, city: "Bangalore" });
                }}
                value={details.city}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">State</label>
              <input
                className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
                type="text"
                onChange={(e) => {
                  setDetails({ ...details, state: "Karnataka" });
                }}
                value={details.state}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">pin code</label>
              <input
                className="px-4 py-1 border-[1px] border-gray-700 rounded-lg"
                type="number"
                placeholder="pin code"
                onChange={(e) => {
                  setDetails({ ...details, postal: e.target.value });
                }}
                value={details.postal}
              />
              {invalidPinCode && (
                <p className="text-red-600">
                  Sorry! We don&apos;t operate in that area as of now.
                </p>
              )}
            </div>
          </div>
          <button
            className="bg-blue-600 py-2 px-4 rounded text-white"
            onClick={onSubmitHandler}
          >
            Add Address
          </button>
        </form>
      </div>
    </main>
  );
}
