import AboutHeader from "@/components/about-us/AboutHeader";
import ContentSection from "@/components/about-us/ContentSection";
import AboutContent from "@/components/about-us/AboutContent";
export default function About() {
    return (
        <main className="flex-grow">
            <AboutHeader />
            <div className="border-b border-light-silver-2"></div>
            <AboutContent />
        </main>
    )
}