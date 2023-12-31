"use client";
import React, { Suspense, useState } from "react";
import Payment from "./Payment";

const SendPayment = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleNextClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowNextComponent(true);
    }, 2000);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  if (showNextComponent) {
    return <Payment name={name} />;
  }
  return (
    <section className="mx-auto max-w-screen-lg mt-14 md:px-0 px-2">
      <p className="text-3xl">Send payment to</p>
      <div className="flex items-center gap-4 mt-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Name, @username,email or mobile"
            value={name}
            onChange={handleNameChange}
            className="rounded-full text-base border border-black placeholder:text-gray-800 px-10 py-2 pr-10 focus:outline-none md:w-[500px] md:h-[50px]"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className="text-gray-800 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleNextClick}
          disabled={!name}
          className={`items-center rounded-full  shadow-xl border px-6 py-3 font-semibold ${
            name ? "bg-[#0917b0] text-white" : "bg-gray-100 text-gray-400"
          }`}
        >
          {isLoading ? "Processing..." : "Next"}
        </button>
      </div>
    </section>
  );
};

export default SendPayment;
