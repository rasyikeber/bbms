import React from 'react'

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-2">
            <span className="font-medium">Email:</span> example@gmail.com
        </p>
        <p className="text-gray-700 mb-2">
            <span className="font-medium">Address:</span> London
        </p>
        <p className="text-gray-700">
            <span className="font-medium">Phone:</span> 09173845845
        </p>
    </div>
  )
}

export default ContactInfo
