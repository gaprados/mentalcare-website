import { Hero } from "../components/Hero";
import { HeroCard } from "../components/HeroCard";

export function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center translate-y-36 pb-16">
      <Hero />
      <HeroCard />
    </section>
  )
}