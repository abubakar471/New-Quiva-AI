import Features from "@/components/home/features/Features";
import FooterCta from "@/components/home/footer/FooterCta";
import BackgroundBoxesContainer from "@/components/home/hero/background-boxes-container";
import Partners from "@/components/home/partners/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundBoxesContainer />

      <div className="text-white">
        <Partners />
        <Features />
        <FooterCta />
      </div>
    </main>
  );
}
