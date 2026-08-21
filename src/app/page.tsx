import { Benefits } from "@/components/Benefits";
import { BotCards } from "@/components/BotCards";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Results } from "@/components/Results";
import { Ticker } from "@/components/Ticker";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Ticker />
        <Hero />
        <TrustStrip />
        <Benefits />
        <BotCards />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
