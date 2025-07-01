import Header from '../components/Header';
import Hero from '../components/Hero';
import IntroSection from "../components/IntroSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-r from-white to-yellow-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
                    <Hero />
                </div>
            </div>
            <IntroSection />
            <ProjectsSection/>
        </>
    );
}
