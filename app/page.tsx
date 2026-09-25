import { HeroSection } from "@/components/home";

export default async function Home() {
    const response = await fetch('http://localhost:3000//api/jobs');
    const result = await response.json();
    console.log(result);

    return (
        <HeroSection />
    );
}