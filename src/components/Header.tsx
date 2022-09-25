import { useEffect, useState } from 'react';
import logoImg from '../assets/logo.svg';
import logoAltImg from '../assets/logo-alt.svg';

export function Header() {
  const [currentView, setCurrentView] = useState<string>("app");
  const [screenYPosition, setScreenYPosition] = useState(0)

  const links = [
    { label: "Início", href: "home" },
    { label: "Serviços", href: "servicos" },
    { label: "Depoimentos", href: "depoimentos" },
    { label: "Sobre Nós", href: "sobre-nos" },
  ]

  const handleCurrentView = () => {
    const sections = document.querySelectorAll("section");
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const checkpointStart = checkpoint >= sectionTop;
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

      if (checkpointStart && checkpointEnd) {
        setCurrentView(section.id);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScreenYPosition(window.scrollY);
      handleCurrentView();
    });
  }, []);

  const logoVariant = screenYPosition >= 80 ? logoAltImg : logoImg
  const headerVariant = screenYPosition >= 80 ? "bg-sky-700" : "bg-transparent"

  return (
    <header className={`flex z-10 ${headerVariant} items-center justify-between h-20 fixed top-0 w-full px-40`}>
      <img src={logoVariant} alt="" />

      <nav className='flex justify-evenly'>
        <ul className='flex gap-8'>
          {links.map((link) => {
            const isActive = link.href === currentView;
            const activeStyle = isActive ? "text-sky-700 border-b-2 border-sky-700 pb-2" : "text-sky-600 hover:text-sky-700 hover:border-b-2 hover:border-sky-700 hover:pb-2";
            const activeStyleVariant = isActive ? "text-white border-b-2 border-white pb-2" : "text-sky-200 opacity-50 hover:opacity-100";

            const navStyle = screenYPosition >= 80 ? activeStyleVariant : activeStyle
            return (
              <li
                className={`${navStyle} text-lg`}
              >
                <a className='font-semibold text-lg transition-colors' href={`#${link.href}`}>{link.label}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}