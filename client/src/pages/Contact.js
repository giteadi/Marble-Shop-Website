// Contact.jsx
import React from 'react';
import Carousel from '../components/Carousal';
export default function Contact() {
  return (
    
      
          <div className="flex flex-wrap justify-around w-full bg-white rounded-lg shadow-md item-center">
             {/* Heading */}
     <div className='flex items-center justify-center '>
      <h1 className='animate-charcter'>VISHNU HAST KALA KENDRA</h1>
     </div>
          
              <div className='w-[600px]'>
              <h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="3" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
            </form>
              </div>
         <div>
        <img src='https://res.cloudinary.com/bazeercloud/image/upload/v1710864758/images/ani_wnsxyp.webp' alt='Contactus'/>
      </div>
    </div>

  );
}
