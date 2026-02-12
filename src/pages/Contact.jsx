import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        <form className="space-y-4">
          <input type="text" placeholder="Your name" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
          <input type="email" placeholder="Your email" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
          <textarea rows="4" placeholder="Your message" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Send Message</button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Contact