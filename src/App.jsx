import BryanImg from "./assets/Bryan.jpg"
import P from "./P";
import ProjectCard from "./ProjectCard";
import Technologies from "./Technologies";
import libarterImg from "./assets/WelcomeToLibarter.png"
import ecowareImg from "./assets/Ecoware.png"
import dishwasherImg from "./assets/dishwasher.png"


function App() {
  return (
    <main className=" bg-customColors-primary w-screen h-screen overflow-y-scroll overflow-x-hidden p-6 pt-10 flex justify-center">
      <div className=" max-w-screen-2xl flex-col justify-center">
        <section className="lg:flex lg:justify-between lg:items-center h-fit gap-5 mb-12">
          <img className=" border-8 border-customColors-accent lg:max-w-3xl mb-5" src={BryanImg} alt="" />
          <section className="flex-col">
            <h1 className=" text-7xl text-customColors-accent font-bold">Hello There,</h1>
            <p className="text-xs text-customColors-secondary">General Kenobi!(If you got it we can be friends)</p>
            <h2 className=" text-5xl text-customColors-complementary font-bold">I'm Bryan Monticelli</h2>
          </section>
        </section>
        <P>
          I am a student at TUES and love programming anything from low-level to web. Although I am only 17 I do have some interesting projects that you may find cool, funny or just pure trash. Counterintuitively I am a programmer, but I do have a life - I play League. Just kidding, what I love doing is eating, going to the gym, hanging out with my friends and my girlfriend, travelling, watching anime and cooking. The handsome gentleman in the photo is me on top of the Eiffel Tower so it's safe to say: I have the highground, Anakin.
        </P>

        <span className="text-customColors-accent text-2xl bg-customColors-secondary border-2 border-customColors-accent p-1">Technologies</span>
        <hr className=" bg-customColors-accent h-1 mb-5"/>
        
        <Technologies/>

        <span className="text-customColors-accent text-2xl bg-customColors-secondary border-2 border-customColors-accent p-1">Projects</span>
        <hr className=" bg-customColors-accent h-1 mb-5"/>

        <ul className="flex flex-col gap-4 mb-32">
          <ProjectCard name={"Libarter"} description={"This is my diploma project and is a website for selling books. It uses Java Spring for BackEnd and React for Frontend and is probably my biggest and most challenging project so far."} designName={"libarter"} image={libarterImg}/>
          <ProjectCard name={'EcoWare'} description={"This is an idea that me and some friends had and are still working on to make it a real project. The idea is to return plastic bottles in the shops near you and get some money for it. The project is written entirely in Flutter."} designName={"ecoware"} image={ecowareImg} link={'https://play.google.com/work/apps/details?id=com.ecoware.EcoWare'}/>
          <ProjectCard name={'Dishwasher'} description={"This is my biggest hardware project yet, and it was exactly what you would think - an actual dishwasher that works and cleans plates, forks or whatever. It was made by me and 2 other friends and we used Arduino for MCU. For more information click here!"} designName={"dishwasher"} image={dishwasherImg} link={'https://docs.google.com/document/d/1WKq6GT7lkKH7rW7l_8IJAo0Sy_ZZeZg79gh3NNwCebw/edit?usp=sharing'}/>
          
        </ul>


      </div>
  </main>
  );
}

export default App;
