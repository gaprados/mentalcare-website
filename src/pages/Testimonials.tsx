import { SectionTitle } from "../components/SectionTitle";
import { TestimonialCard } from "../components/TestimonialCard";

import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';

export function Testimonials() {
  return (
    <section id="depoimentos" className='h-screen flex flex-col items-center justify-center bg-white px-40 pt-20'>
      <SectionTitle>DEPOIMENTOS</SectionTitle>
      <h1 className="text-[2.5rem] font-bold max-w-[30.75rem] text-center">O que nossos clientes dizem sobre nós.</h1>

      <div className="grid grid-cols-2 gap-8 my-12">
        <TestimonialCard />
        <TestimonialCard />
      </div>

      <div className="flex flex-col items-center gap-10">
        <SectionTitle>NOSSOS CLIENTES</SectionTitle>
        <div className="flex gap-24">
          <img src={logo1} alt="" className="w-32 h-16" />
          <img src={logo2} alt="" className="w-32 h-16" />
          <img src={logo3} alt="" className="w-32 h-16" />
          <img src={logo4} alt="" className="w-32 h-16" />
        </div>
      </div>
    </section>
  )
}