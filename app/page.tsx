import { HeroSection } from "@/components/home";

export default async function Home() {
    const response = await fetch('https://jobsmint.vercel.app//api/jobs');
    const result = await response.json();
    console.log(result);

    return (
        <HeroSection />
    );
}