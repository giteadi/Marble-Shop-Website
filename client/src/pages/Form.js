import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/v1/formSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json(); // Parse the JSON response

      if (response.ok) {
        toast.success(data.message); // Show success message from the response
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        toast.error(data.message); // Show error message from the response
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-bold text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white transition-colors bg-indigo-500 rounded-lg hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
