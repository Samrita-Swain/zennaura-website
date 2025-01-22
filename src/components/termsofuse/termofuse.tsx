'use client';

import { FaExclamationCircle, FaShieldAlt, FaRegCheckCircle, FaInfoCircle } from 'react-icons/fa';
import Text from '@/components/ui/typography/text';

export default function Termsofuse() {
  return (
    <div className="container-fluid w-full !max-w-[1248px] pt-12 lg:pt-20 2xl:pb-8 3xl:px-0 3xl:pt-24">
      {/* Header Section */}
      <div className="text-center pb-8">
        <Text tag="h2" className="text-3xl font-bold text-gray-800">
          TERMS OF USE
        </Text>
        <Text className="mt-3 text-lg text-gray-600">
          Welcome to Zennaura! By purchasing and using our products, including essential oils, absolute oils, fragrance oils, and attars, you agree to the following terms of use. Please read them carefully.
        </Text>
      </div>

      {/* Terms Section Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Intended Use */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaInfoCircle className="inline mr-2 text-blue-500" />
            Intended Use
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            Our products are designed for a variety of applications, including aromatherapy, personal care, and other external uses. Always follow the specific guidelines for each product and consult a professional for any unique applications.
          </Text>
        </div>

        {/* Product Safety */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaShieldAlt className="inline mr-2 text-green-500" />
            Product Safety
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            <span className="font-semibold">Dilution:</span> Essential and absolute oils are highly concentrated and should always be diluted with a carrier oil before skin application.
            <br />
            <span className="font-semibold">Patch Test:</span> Perform a patch test before initial use to check for any allergic reactions.
            <br />
            <span className="font-semibold">Avoid Sensitive Areas:</span> Do not apply directly to sensitive areas such as eyes, inner ears, or mucous membranes.
            <br />
            <span className="font-semibold">Storage:</span> Keep products in a cool, dry place away from direct sunlight and out of reach of children and pets.
          </Text>
        </div>

        {/* Medical Disclaimer */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaExclamationCircle className="inline mr-2 text-red-500" />
            Medical Disclaimer
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            Our products are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult a healthcare provider before using any of our products.
          </Text>
        </div>

        {/* Usage Responsibility */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaRegCheckCircle className="inline mr-2 text-orange-500" />
            Usage Responsibility
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            Zennaura is not liable for any misuse of its products. By using our products, you assume full responsibility for their appropriate and safe use.
          </Text>
        </div>

        {/* Allergen and Sensitivity Notice */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaExclamationCircle className="inline mr-2 text-yellow-500" />
            Allergen and Sensitivity Notice
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            Our products are natural and therapeutic grade but may cause sensitivity or allergic reactions in some individuals. Discontinue use immediately if irritation occurs and seek medical advice if necessary.
          </Text>
        </div>

        {/* Compliance with Local Laws */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaShieldAlt className="inline mr-2 text-green-500" />
            Compliance with Local Laws
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            It is your responsibility to ensure that the use of Zennaura products complies with local, state, and federal regulations.
          </Text>
        </div>

        {/* Modifications to Terms */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Text tag="h6" className="text-xl font-semibold text-gray-800">
            <FaRegCheckCircle className="inline mr-2 text-purple-500" />
            Modifications to Terms
          </Text>
          <Text className="mt-3 text-sm text-gray-600">
            Zennaura reserves the right to modify these Terms of Use at any time without prior notice. Continued use of our products constitutes acceptance of any changes.
          </Text>
        </div>

      </div>
    </div>
  );
}
