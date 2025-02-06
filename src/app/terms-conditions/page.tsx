

import Header from "@/components/terms-conditions/Header";
import TermsTitle from "@/components/terms-conditions/TermsTitle";
import TermsContent from "@/components/terms-conditions/TermContent";

export default function Terms() {
    return (
        <main className="flex-grow">
            <TermsTitle />
            <Header />
            <TermsContent />
        </main>
    );
}
