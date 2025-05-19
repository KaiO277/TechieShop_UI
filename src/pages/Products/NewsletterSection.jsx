import React from "react";

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the email submission (e.g., API call)
    alert("Subscribed!");
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-dark mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest updates on new products and upcoming sales
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-grow px-4 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
