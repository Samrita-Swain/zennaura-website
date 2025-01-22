'use client';

import { FaCreditCard, FaWallet, FaExchangeAlt, FaTruck, FaDollarSign, FaLock, FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Text from '@/components/ui/typography/text';

export default function Payments() {
    return (
        <div className="container-fluid w-full max-w-7xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center pb-8">
                <Text tag="h2" className="text-3xl font-bold text-gray-800">
                    Payment Information for Zennaura Products
                </Text>
                <Text className="mt-3 text-lg text-gray-600">
                    We strive to make your shopping experience seamless and secure. Below is detailed information about payment methods, security, and related policies.
                </Text>
            </div>

            {/* Section Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Accepted Payment Methods */}
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Text tag="h6" className="text-xl font-semibold text-gray-800">
                        Accepted Payment Methods:
                    </Text>
                    <Text className="mt-3 text-gray-600">
                        We offer multiple payment options for your convenience:
                    </Text>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <FaCreditCard className="text-blue-500 w-5 h-5 mr-3" />
                            <span className="font-semibold">Credit/Debit Cards:</span> Visa, MasterCard, American Express, and Discover.
                        </li>
                        <li className="flex items-center">
                            <FaWallet className="text-green-500 w-5 h-5 mr-3" />
                            <span className="font-semibold">Digital Wallets:</span> PayPal, Apple Pay, Google Pay, and other popular platforms.
                        </li>
                        <li className="flex items-center">
                            <FaExchangeAlt className="text-purple-500 w-5 h-5 mr-3" />
                            <span className="font-semibold">Bank Transfers:</span> Available for bulk or wholesale orders.
                        </li>
                        <li className="flex items-center">
                            <FaTruck className="text-orange-500 w-5 h-5 mr-3" />
                            <span className="font-semibold">Cash on Delivery (COD):</span> Available in select locations.
                        </li>
                    </ul>
                </div>

                {/* Currency Information */}
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Text tag="h6" className="text-xl font-semibold text-gray-800">
                        Currency:
                    </Text>
                    <Text className="mt-3 text-gray-600">
                        All prices are displayed in your local currency or USD. For international orders, currency conversion fees may apply.
                    </Text>
                </div>

                {/* Payment Security */}
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Text tag="h6" className="text-xl font-semibold text-gray-800">
                        Payment Security:
                    </Text>
                    <Text className="mt-3 text-gray-600">
                        Your payment information is handled with the highest level of security:
                    </Text>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <FaLock className="text-red-500 w-5 h-5 mr-3" />
                            SSL encryption protects your personal and financial data.
                        </li>
                        <li className="flex items-center">
                            <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                            Transactions are processed through trusted gateways.
                        </li>
                        <li className="flex items-center">
                            <FaLock className="text-red-500 w-5 h-5 mr-3" />
                            Zennaura does not store sensitive payment details.
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
                            <FaDollarSign className="text-yellow-500 w-5 h-5 mr-3" />
                            Refunds processed within 7–14 business days after approval.
                        </li>
                        <li className="flex items-center">
                            <FaTimesCircle className="text-red-500 w-5 h-5 mr-3" />
                            Orders can be canceled before dispatch. Contact support immediately.
                        </li>
                    </ul>
                </div>

                {/* Taxes and Additional Fees */}
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Text tag="h6" className="text-xl font-semibold text-gray-800">
                        Taxes and Additional Fees:
                    </Text>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <FaDollarSign className="text-yellow-500 w-5 h-5 mr-3" />
                            Prices may include/exclude taxes based on your location.
                        </li>
                        <li className="flex items-center">
                            <FaTruck className="text-orange-500 w-5 h-5 mr-3" />
                            Customs duties may apply for international orders.
                        </li>
                    </ul>
                </div>

                {/* Issues with Payments */}
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Text tag="h6" className="text-xl font-semibold text-gray-800">
                        Issues with Payments:
                    </Text>
                    <Text className="mt-3 text-gray-600">
                        If you experience issues, please:
                    </Text>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                            Verify your payment details.
                        </li>
                        <li className="flex items-center">
                            <FaLock className="text-red-500 w-5 h-5 mr-3" />
                            Contact your bank or payment provider.
                        </li>
                        <li className="flex items-center">
                            <FaRegCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                            Reach out to Zennaura’s customer support team.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
