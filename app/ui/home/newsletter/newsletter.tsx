"use client";
import { playfairDisplay, openSans } from "../../fonts";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="block lg:flex-1 bg-gray-100 h-[700px]"></div>

      <div
        className={`${openSans.className} lg:flex-1 bg-secondary-100 flex flex-col justify-center items-center h-[700px]`}
      >
        <div className="flex flex-col items-start">
          <h2
            className={`${playfairDisplay.className} text-4xl sm:text-5xl font-bold text-primary-200 mb-4`}
          >
            Join Our
            <br />
            <span className="text-5xl sm:text-6xl">Newsletter</span>
          </h2>
          <p className="text-lg text-primary-200 mb-8">
            Receive exclusive deals, discounts and many offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full px-4 py-4 border-0 border-b border-gray-300 focus:border-b-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className={`${openSans.className} w-full sm:w-auto px-8 py-4 bg-primary-200 text-white rounded-lg font-semibold text-lg hover:bg-primary-100 transition-colors`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
