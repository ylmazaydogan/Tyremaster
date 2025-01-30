import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SendUsEmail from "@/components/contact-us/SendUsEmail";
import WelcomeSection from "@/components/contact-us/WelcomeSection";

const Contact = () => {
    return (
        <main className="flex-grow">
            <div className=" mx-7">
                <div className="grid lg:grid-cols-2 lg:divide-x border-cool-gray mt-10 lg:mt-20">
                    <SendUsEmail />
                    <WelcomeSection />
                </div>
            </div>
        </main>
    );
};

export default Contact;
