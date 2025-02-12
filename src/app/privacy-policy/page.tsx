import PrivacyTitle from "@/components/privacy-policy/PrivacyTitle";
import PrivacyContent from "@/components/privacy-policy/PrivacyContent";

export default function PrivacyPolicy() {
    return (
        <main className="flex-grow">
            <PrivacyTitle />
            <div className="border border-light-silver-2 w-full">
            <PrivacyContent />
            </div>
        </main>
    )
}

