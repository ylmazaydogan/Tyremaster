
import SendUsEmail from "@/components/contact-us/SendUsEmail";
import WelcomeSection from "@/components/contact-us/WelcomeSection";
import ContactMap from "@/components/contact-us/ContactMap";

const Contact = () => {
    return (
        <main className="flex-grow">
            <div className="">
                <ContactMap />
                <div className="grid lg:grid-cols-2 mx-7 lg:divide-x border-cool-gray mt-10 lg:mt-20">
                    <SendUsEmail />
                    <WelcomeSection />
                </div>
            </div>
        </main>
    );
};

export default Contact;
