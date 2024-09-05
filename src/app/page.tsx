import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between py-2">
            <HeroSection />
            <FeaturedProducts />
        </main>
    );
}
