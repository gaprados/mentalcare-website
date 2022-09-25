import { SectionTitle } from "../components/SectionTitle"
import { ServicesCard } from "../components/ServicesCard"

export function Services() {
  return (
    <section id="servicos" className='h-screen flex flex-col items-center justify-center bg-neutral-100 px-40 pt-20'>
      <SectionTitle>SERVIÇOS</SectionTitle>
      <h1 className="text-[2.5rem] font-bold max-w-[30.75rem] text-center">Como podemos ajudá-lo a se sentir melhor?</h1>
      <div className="mt-16 grid grid-cols-3 gap-10">
        <ServicesCard title='Bem-estar mental' />
        <ServicesCard title='Psicologia social' />
        <ServicesCard title='Cuidados pedriátricos' />
        <ServicesCard title='Bem-estar mental' />
        <ServicesCard title='Psicologia social' />
        <ServicesCard title='Cuidados pedriátricos' />
      </div>
    </section>
  )
}