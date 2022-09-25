import quotesImg from '../assets/quotes.svg'

export function TestimonialCard() {
  return (
    <div className="flex flex-col gap-5 bg-zinc-100 rounded-md w-[544px] h-[273px] p-8">
      <header className="w-full">
        <img src={quotesImg} alt="quotes" className='w-8 h-8' />
      </header>
      <main className="w-full">
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
      </main>
      <footer className="w-full flex gap-4 items-center">
        <img src="https://thispersondoesnotexist.com/image" alt="" className='rounded-full h-11 w-11' />
        <span className="text-sky-700 font-bold">John Doe</span>
      </footer>
    </div>
  )
}