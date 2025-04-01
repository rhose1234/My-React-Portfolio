import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("https://formspree.io/f/xanedgon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear input fields
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error sending message.");
    }

    // Hide status message after 3 seconds
    setTimeout(() => setFormStatus(""), 3000);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4" id="contact">
      {/* Heading */}
      <div className="mb-0 flex items-center text-center justify-center">
        <div className="flex items-center justify-center mr-4 mb-3">
          <span className="blinking-circle absolute w-1 h-1"></span>
          <span className="blinking-circle absolute w-2 h-2"></span>
          <span className="blinking-circle absolute w-3 h-3"></span>
        </div>
        <h2 className="text-start md:text-center text-2xl font-bold mb-12 mt-8">Wanna Build a Project?</h2>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-start mb-6">Reach Out To Me</h2>

        {formStatus && <p className="text-green-600 text-center mb-4">{formStatus}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-[#613B26] focus:border-[#613B26] outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-[#613B26] focus:border-[#613B26] outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1  w-full p-2 text-sm font-sm border border-gray-300 rounded-lg focus:ring-[#613B26] focus:border-[#613B26] outline-none h-28"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-start text-sm font-sm">
            <button
              type="submit"
              className="bg-[#613B26] text-white font-normal text-md px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#613B26] hover:border hover:border-b hover:border-[#BB8E5A] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
