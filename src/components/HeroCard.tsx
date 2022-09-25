export function HeroCard() {
  return (
    <div className="w-full max-w-[1366px] rounded-md shadow-md bg-white h-[13.125rem] mx-40 flex items-center justify-center">
      <div className="w-4/5 flex gap-16 items-center justify-center">

        <div className="w-full h-24 flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-5xl">+2.000</h1>
          <span className="font-semibold text-sky-600">Pacientes atendidos</span>
        </div>

        <div className="w-[1px] h-24 bg-sky-500" />

        <div className="w-full h-24 flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-5xl">+10</h1>
          <span className="font-semibold text-sky-600">Especialistas disponíveis</span>
        </div>

        <div className="w-[1px] h-24 bg-sky-500" />

        <div className="w-full h-24 flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-5xl">+4</h1>
          <span className="font-semibold text-sky-600">Anos no mercado</span>
        </div>
      </div>
    </div>
  )
}