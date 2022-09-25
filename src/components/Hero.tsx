import { SectionTitle } from './SectionTitle';

import heroImg from '../assets/hero-woman.svg';
import { ScheduleButton } from './ScheduleButton';

export function Hero() {
  return (
    <div className="flex items-center px-40 h-auto w-full justify-between">
      <div className="flex flex-col items-start w-[60%]">
        <SectionTitle>BOAS VINDAS A MENTALCARE</SectionTitle>

        <h1 className="mt-4 mb-6 font-bold text-[3.25rem]">Assitência médica psicológica para todos</h1>

        <span className="text-lg">Nossos médicos especializados vão auxiliá-lo indo além dos sintomas, para tratar a causa raiz e proporcionar soluções e tratametos a longo prazo para a sua saúde mental.</span>
<ScheduleButton />
        
      </div>
      <div className="w-[40%]">
        <img src={heroImg} alt="" />
      </div>
    </div >
  )
}