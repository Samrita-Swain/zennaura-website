'use client';

import { FaLock, FaRegCheckCircle, FaTimesCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Text from '@/components/ui/typography/text';

export default function Policy() {
  return (
    <div className="container-fluid w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center pb-8">
        <Text tag="h2" className="text-3xl font-bold text-gray-800">
          Privacy Policy for Zennaura Products
        </Text>
        <Text className="mt-3 text-lg text-gray-600">
          At Zennaura, we prioritize the privacy of our customers and are committed to protecting your personal information. Below is an overview of our privacy practices regarding the collection, use, and safeguarding of your data when purchasing essential oils, absolute oils, fragrance oils, and attars.
        </Text>
      </div>

      {/* Section Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Information We Collect */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            Information We Collect:
          </Text>
          <Text className="mt-3 text-gray-600">
            We may collect the following types of information:
          </Text>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Name
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Contact information (email address, phone number)
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Shipping and billing addresses
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Usage Data (browsing behavior, IP address, device information)
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            How We Use Your Information:
          </Text>
          <Text className="mt-3 text-gray-600">
            Your information is used to:
          </Text>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Process and fulfill your orders
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Provide customer support
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Improve our website, products, and services
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Send promotional offers and newsletters
            </li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            Data Security:
          </Text>
          <Text className="mt-3 text-gray-600">
            We implement industry-standard security measures, including:
          </Text>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaLock className="text-red-500 w-5 h-5 mr-3" />
              SSL encryption protects your personal and financial data
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Restricted access to your data
            </li>
            <li className="flex items-center">
              <FaLock className="text-red-500 w-5 h-5 mr-3" />
              Zennaura does not store sensitive payment details
            </li>
          </ul>
        </div>

        {/* Refunds and Cancellations */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            Refunds and Cancellations:
          </Text>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
              Refunds processed within 7–14 business days after approval
            </li>
            <li className="flex items-center">
              <FaTimesCircle className="text-red-500 w-5 h-5 mr-3" />
              Orders can be canceled before dispatch. Contact support immediately
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            Contact Us:
          </Text>
          <Text className="mt-3 text-gray-600">
            For questions or concerns about this Privacy Policy, please contact us at:
          </Text>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaEnvelope className="text-blue-500 w-5 h-5 mr-3" />
              Email: 
              <a href="mailto:kewin.david@zennaura.com" className="ml-2 text-blue-500 hover:underline">
                kewin.david@zennaura.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-500 w-5 h-5 mr-3" />
              Phone: 
              <a href="tel:+971565937032" className="ml-2 text-blue-500 hover:underline">
                +971-565937032
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
