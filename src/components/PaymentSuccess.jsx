import Image from "next/image";
import React, { useState } from "react";
import SendPayment from "./SendPayment";

const PaymentSuccess = ({ name, amount }) => {
  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleNextClick = () => {
    setShowNextComponent(true);
  };

  if (showNextComponent) {
    return <SendPayment />;
  }
  return (
    <div className=" flex flex-col gap-4 items-center justify-center m-20">
      <img
        src="/assets/success.png"
        className=" h-24 w-24 "
        alt="paypal"
      />
      <p>
        You&apos;ve sent {amount} USD to {name}
      </p>
      <div className="mt-10">
        <button
          onClick={handleNextClick}
          className={`items-center rounded-full text-white shadow-xl border px-32 py-3 font-semibold ${"bg-[#0917b0]"}`}
        >
          Send more money
        </button>
      </div>
      <p>Go to summary</p>
    </div>
  );
};

export default PaymentSuccess;
