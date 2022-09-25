import { BsWhatsapp } from 'react-icons/bs'

export function ScheduleButton() {
  return (
    <a href='https://api.whatsapp.com/send/?phone=55981234567&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0' className="flex w-[262px] gap-4 my-8 p-4 bg-sky-700 rounded-full text-white font-bold hover:bg-sky-500 transition-colors">
      <BsWhatsapp size={22} />
      AGENDE SUA CONSULTA
    </a>
  )
}