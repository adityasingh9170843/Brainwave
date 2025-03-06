import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[6.25rem] overflow-hidden  lg:bg-[#0E0C15]/90">
        <Header />
        <Hero/>
        <Benefits/>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
