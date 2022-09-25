import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import logoImg from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className="h-72 mx-44 py-12 px-24 ">
      <div className="h-full flex">
        <div className="flex flex-col flex-1 justify-between py-2 text-zinc-800">
          <div className="flex flex-col">
            <img src={logoImg} className='w-[328px] pb-4' alt="" />
            <span>St. Médico Hospitalar Sul - Asa Sul</span>
            <span>Brasília - DF</span>
            <span> 70297-400</span>
            <div className="flex gap-8 my-2">
              <span>(61) 3333-3333</span>
              <span>(61) 98123-4567</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-16 w-[30%]">
          <a href="https://instagram.com" className='text-sky-700'>
            <BsInstagram size={32} />
          </a>
          <a href="https://facebook.com" className='text-sky-700'>
            <BsFacebook size={32} />
          </a>
          <a href="" className='text-sky-700'>
            <BsWhatsapp size={32} />
          </a>
        </div>
      </div>
    </footer>
  )
}