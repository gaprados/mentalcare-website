import checkImg from '../assets/check-circle.svg';

interface ServicesCardProps {
  title: string;
}

export function ServicesCard({ title }: ServicesCardProps) {
  return (
    <div className="p-4 flex flex-col gap-4 w-[347px] h-[207px] rounded-md bg-white shadow-md">
      <img src={checkImg} alt="" className='w-6 h-6 ' />
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
      </p>
    </div>
  )
}