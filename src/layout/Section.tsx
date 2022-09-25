interface SectionProps {
  children: React.ReactNode;
  id: string;
  background: string;
}

export function Section({ children, id, background }: SectionProps) {
  return (
    <section id={id} className={`h-screen ${background} pt-24 px-40`}>
      {children}
    </section>
  )
}