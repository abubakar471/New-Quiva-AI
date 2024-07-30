import BackgroundBoxesContainer from "@/components/home/hero/background-boxes-container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundBoxesContainer />

      <div className="h-[50vh] text-3xl text-white">
        white
      </div>
    </main>
  );
}