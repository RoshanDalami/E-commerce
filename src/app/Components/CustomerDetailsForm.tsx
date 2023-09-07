"use client";
import { FormEvent, useState } from "react";
export default function AddressForm() {
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "Bangalore",
    state: "Karnataka",
    postal: 560097,
  });
  const [validNumber,setValidNumber]=useState(true)

  
  const onSubmitHandler = (e:FormEvent)=>{
    e.preventDefault();
    if(details.phone.length !== 10){
        setValidNumber(false)
        return;
    }
    setValidNumber(true)
    console.log(details)
    setDetails({
        fullname: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "Bangalore",
        state: "Karnataka",
        postal: 560097,
    })
  }

  return (
    <main className="flex flex-col gap-2  ">

      <div className="text-2xl font-semibold">Shipping Details</div>
      <div className="">
        <form action="" className="flex flex-col gap-3 items-center">
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
            { validNumber ? '':<p className="text-red-600 ">please enter valid number</p> }
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-2xl font-semibold">Shipping Address</label>
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
                onChange={(e) => {
                  setDetails({ ...details, postal: 560097 });
                }}
                value={details.postal}
                readOnly
              />
            </div>
          </div>
          <button className="bg-blue-600 py-2 px-4 rounded text-white" onClick={onSubmitHandler}>Add Address</button>
        </form>
      </div>
    </main>
  );
}
