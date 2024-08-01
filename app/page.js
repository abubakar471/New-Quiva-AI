import Features from "@/components/home/features/Features";
import FooterCta from "@/components/home/footer/FooterCta";
import BackgroundBoxesContainer from "@/components/home/hero/background-boxes-container";
import Partners from "@/components/home/partners/Partners";
import Pricing from "@/components/home/Pricing/Pricing";
import Services from "@/components/home/services/Services";
import WhyTrustUs from "@/components/home/whyTrustUs/WhyTrustUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BackgroundBoxesContainer />

      <div className="text-white">
        <Partners />
        <Features />
        <WhyTrustUs />
        <Services />
        <Pricing />
        <FooterCta />
      </div>
    </main>
  );
}
