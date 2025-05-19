// NewsletterSignup.jsx
import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    // Simulate a subscribe action
    console.log("Subscribed with:", email);
    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-16 bg-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get 20% Off Your First Order</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and get exclusive discounts and updates on new arrivals
        </p>
        <div className="flex flex-col md:flex-row justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-l-lg w-full mb-2 md:mb-0 md:rounded-r-none text-gray-800"
          />
          <button
            onClick={handleSubscribe}
            className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 md:rounded-r-lg hover:bg-yellow-400 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
