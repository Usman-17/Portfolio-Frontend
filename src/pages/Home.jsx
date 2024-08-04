import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Timeline />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
