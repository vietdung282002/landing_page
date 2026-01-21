"use client";
import { playfairDisplay, openSans, roboto } from "../../fonts";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div
        className="block h-[700px] bg-cover bg-center bg-no-repeat lg:flex-1"
        style={{ backgroundImage: "url('/letter_bg.jpg')" }}
      ></div>

      <div
        className={`${openSans.className} bg-secondary-100 flex h-[700px] flex-col items-center justify-center lg:flex-1`}
      >
        <div className="flex flex-col items-start">
          <h2
            className={`${playfairDisplay.className} text-primary-200 mb-4 text-4xl font-bold sm:text-5xl`}
          >
            Join Our
            <br />
            <span className="text-5xl sm:text-6xl">Newsletter</span>
          </h2>
          <p className="text-primary-200 mb-8 text-lg">
            Receive exclusive deals, discounts and many offers.
          </p>
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-10">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-0 border-b border-gray-300 px-4 py-4 focus:border-b-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className={`${roboto.className} bg-primary-100 w-full rounded-lg px-8 py-4 text-2xl text-white transition-colors sm:w-auto 2xl:h-[68px] 2xl:w-[250px]`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
