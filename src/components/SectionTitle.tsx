interface SectionTitleProps {
  children: string;
  variant?: 'white'
}

export function SectionTitle({ children, variant }: SectionTitleProps) {
  const textColor = variant ? 'text-white' : 'text-sky-600'
  return (
    <span className={`${textColor} font-bold text-sm`}>{children}</span>
  )
}