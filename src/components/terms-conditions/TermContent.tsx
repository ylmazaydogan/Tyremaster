"use client";

import TermItem from "./TermItem";



export default function TermsContent() {
    return (
        <div className="flex flex-col mt-16 responsive border border-light-silver-2 rounded-st mb-10">
            <div className="py-4 terms-container">
                <p className="text-justify text-base text-gray leading-7 mt-7">
                    These Terms and Conditions ("Terms") govern your use of the TyreMaster wholesale website and all transactions conducted through it.
                    By accessing and using our website and placing orders, you agree to be bound by these Terms. Please read them carefully.
                </p>
                <br />
                {termsData.map((term, index) => (
                    <TermItem key={index} title={term.title} description={term.description} />
                ))}
            </div>
            
        </div>
    );
}

const termsData = [
    {
        title: "1.No Returns",
        description: "As a wholesaler, we do not accept returns or offer refunds for products purchased through TyreMaster. All sales are final.",
    },
    {
        title: "2.Minimum Order Quantity (MOQ)",
        description: "The Minimum Order Quantity for all orders placed with TyreMaster is €1000. Orders below this threshold will not be processed.",
    },
    {
        title: "3.Reporting Damages",
        description: "Any damages to products received must be reported to TyreMaster within 24 hours of delivery. Please contact our customer service team immediately if you receive damaged items.",
    },
    {
        title: "4.Order Cancellation",
        description: "Orders cannot be canceled after they have entered the processing stage. Once your order is in progress, it cannot be modified or canceled.",
    },
    {
        title: "5.Pricing and Availability",
        description: "Prices and product availability on our website are subject to change without notice. We strive to provide accurate and up-to-date information, but errors may occur. In the event of a pricing error, we reserve the right to cancel any orders placed at incorrect prices.",
    },
    {
        title: "6.Payment Terms",
        description: "Payment for orders must be made in full before processing and shipment. We accept various payment methods, which will be provided during the checkout process.",
    },
    {
        title: "7.Shipping and Delivery:",
        description: "TyreMaster will make every effort to ensure prompt and reliable delivery. Shipping costs, delivery times, and methods will be specified during the checkout process.",
    },
    {
        title: "8.Warranty and Liability:",
        description: "TyreMaster does not provide warranties for the products sold. All warranties, if any, are provided by the respective manufacturers. We are not liable for any damages, loss, or injury resulting from the use of our products.",
    },
    {
        title: "9.Compliance with Laws:",
        description: "You agree to comply with all applicable laws and regulations related to the purchase and use of our products.",
    },
    {
        title: "10.Privacy Policy:",
        description: "- Your personal information will be handled in accordance with our Privacy Policy. By using our website, you consent to the collection and use of your personal information as described therein.",
    },
    {
        title: "11.Governing Law and Jurisdiction:",
        description: "- These Terms are governed by and construed in accordance with the laws of the Belgium. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of Belgium",
    },
    {
        title: "12.Changes to Terms and Conditions:",
        description: "TyreMaster reserves the right to update or modify these Terms and Conditions at any time. It is your responsibility to review these Terms periodically for changes.",
    },
    {
        title: "Contact Information:",
        description: "- If you have any questions or concerns about these Terms or any other inquiries, please contact us using the information provided on our website.",
    },
];
