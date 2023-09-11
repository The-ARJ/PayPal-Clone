import { UserIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import PaymentSuccess from "./PaymentSuccess";
import Link from "next/link";

const Payment = ({ name }) => {
  const [amount, setAmount] = useState("");
  const [showNextComponent, setShowNextComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleNextClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowNextComponent(true);
    }, 2000);
  };

  if (isLoading) {
    return <p className=" text-center m-10 text-xl">Processing Payment...</p>;
  }

  if (showNextComponent) {
    return <PaymentSuccess name={name} amount={amount} />;
  }
  return (
    <section className="mx-auto max-w-screen-md  mt-14 ">
      <div className=" border-2  pb-10 rounded-md ">
        <div className=" flex items-center justify-center m-10 gap-4">
          <UserIcon className=" h-10 text-blue-900" />
          <p className=" text-center">{name}</p>
        </div>
        <div className="flex gap-2 items-center justify-center  text-xl">
          <p>$</p>
          <input
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            className=" border-2  border-gray-500 w-20 rounded-full text-center"
          />
        </div>
        <div className="flex gap-4 items-center justify-center mt-4 font-semibold">
          <p className=" rounded-full bg-gray-200 py-1 text-center px-4 text-[10px]">
            USD
          </p>
        </div>
        <h1 className=" ml-10"> + Whats this payment for?</h1>
      </div>
      <div className=" m-6 text-center ">
        <p>
          For more information please read our <strong>user agreement</strong>.
        </p>
        <div className="mt-6">
          <button
            onClick={handleNextClick}
            disabled={!amount}
            className={`items-center rounded-full  shadow-xl border px-32 py-3 font-semibold ${
              amount ? "bg-[#0917b0] text-white" : "bg-gray-100 text-gray-400"
            }`}
          >
            Next
          </button>
        </div>
        <div className="mt-6 mb-60">
          <Link
            href="#"
            className={`items-center  px-32 py-3 font-semibold text-[#0917b0] 
            }`}
          >
            Cancel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Payment;
