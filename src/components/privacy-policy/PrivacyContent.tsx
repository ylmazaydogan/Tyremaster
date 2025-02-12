
const Introduction = () => {
    return (
        <p className="text-justify text-base text-gray leading-7 mt-7">
            At TyreMaster, we are committed to protecting your privacy. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal information when you use our website and services. By accessing or using our website, you consent to the practices described in this Privacy Policy.
        </p>
    )
}

const InformationCollection = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">1. Information We Collect</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">1.1. Personal Information: We may collect personal information, such as your name, email address, phone number, and shipping address, when you place an order or create an account on our website.</p>
            <p className="text-justify text-base text-gray mt-1">1.2. Payment Information: To process your orders, we may collect and store payment information, including credit card details or other payment methods.</p>
            <p className="text-justify text-base text-gray mt-1">1.3. Usage Information: We may collect information about your use of our website, including your IP address, browser type, referring/exit pages, and operating system.</p>
        </div>
    )
}

const InformationUsage = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">2. How We Use Your Information</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">2.1. Order Processing: We use your information to process and fulfill your orders.</p>
            <p className="text-justify text-base text-gray mt-1">2.2. Customer Support: We may use your information to assist you with inquiries or support requests.</p>
            <p className="text-justify text-base text-gray mt-1">2.3. Marketing: We may use your information to send you promotional materials or offers, unless you opt out.</p>
        </div>
    )
}

const DataSharing = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">3. Data Sharing and Disclosure</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">3.1. Service Providers: We may share your information with third-party service providers who assist us in operating our website and conducting our business.</p>
            <p className="text-justify text-base text-gray mt-1">3.2. Legal Requirements: We may disclose your information if required by law or in response to legal processes.</p>
        </div>
    )
}

const DataSecurity = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">4. Data Security</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet can be guaranteed to be completely secure. You acknowledge and accept this risk.</p>
        </div>
    )
}

const CookiesTracking = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">5. Cookies and Tracking</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. You can manage your cookie preferences through your browser settings.</p>
        </div>
    )
}

const YourChoices = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">6. Your Choices</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">6.1. Access: You may request access to the personal information we hold about you.</p>
            <p className="text-justify text-base text-gray mt-1">6.2. Correction: You may request corrections to your personal information.</p>
            <p className="text-justify text-base text-gray mt-1">6.3. Deletion: You may request the deletion of your personal information, subject to legal obligations.</p>
        </div>
    )
}

const PolicyChanges = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">7. Changes to This Privacy Policy</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">We may update this Privacy Policy to reflect changes in our practices and the law. We will notify you of any material changes by posting the updated policy on our website.</p>
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">8. Contact Us</span>
            <br />
            <p className="text-justify text-base text-gray mt-1">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@tyremaster.com" className="text-blue-500">info@tyremaster.com</a>.</p>
        </div>
    )
}


export default function PrivacyContent() {
    return (
        <div className="flex flex-col mt-20 responsive border border-light-silver-2 rounded-st mb-14">
            <div className="py-4 terms-container mb-14">
                <Introduction />
                <br /><br />
                <InformationCollection />
                <br /><br />
                <InformationUsage />
                <br /><br />
                <DataSharing />
                <br /><br />
                <DataSecurity />
                <br /><br />
                <CookiesTracking />
                <br /><br />
                <YourChoices />
                <br /><br />
                <PolicyChanges />
                <br /><br />
                <ContactInfo />
            </div>
        </div>
    )
}
