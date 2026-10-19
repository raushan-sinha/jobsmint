import HeroSection from "../components/home/HeroSection";
import SEO from "../components/layout/SEO";

export default function Home() {
    return (
        <>
            <SEO
                title="JobsMint | Find Your Next Job"
                description="Discover job opportunities, explore career options, and connect with employers using JobsMint."
            />

            <main>
                <HeroSection />
            </main>
        </>
    );
}
