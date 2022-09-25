import { ScheduleButton } from "../components/ScheduleButton";
import { SectionTitle } from "../components/SectionTitle";

export function About() {
  return (
    <section id="sobre-nos" className='h-screen flex flex-col items-center justify-center bg-sky-600 px-40 pt-20'>
      <SectionTitle variant='white'>SOBRE NÓS</SectionTitle>
      <h1 className="text-[2.5rem] text-white font-bold max-w-[30.75rem] text-center">Quem somos?</h1>

      <div className="flex px-40 mt-32  text-white max-w-[1366px] w-full">
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" className="rounded-lg h-[428px]" />
        </div>

        <div className=" flex flex-col gap-8 flex-1">
          <h1 className="font-bold text-5xl">Somos especialistas em ajudar.</h1>
          <p className="leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
          </p>

          <ScheduleButton />
        </div>
      </div>
    </section>
  )
}