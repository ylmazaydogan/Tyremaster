import AboutHeader from "@/components/about-us/AboutHeader";
import ContentSection from "@/components/about-us/ContentSection";
import AboutContent from "@/components/about-us/AboutContent";
export default function About() {
    return (
        <main className="flex-grow">
            <AboutHeader />
            <AboutContent />
        </main>
    )
}