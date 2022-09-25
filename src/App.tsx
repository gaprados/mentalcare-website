import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Testimonials } from "./pages/Testimonials";


export function App() {
  return (
    <div className="flex flex-col h-auto">
      <Header />

      <main id="home" className="">
        <Home />
        <Services />
        <Testimonials />
        <About />
        <Footer />
      </main>
    </div>
  )
}

