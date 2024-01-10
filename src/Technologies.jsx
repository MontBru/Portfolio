import CLogo from "./assets/C_Logo.png"
import CPPLogo from "./assets/CPP_Logo.png"
import JavaLogo from "./assets/JavaLogo.png"
import ReactLogo from "./assets/ReactLogo.png"
import JSLogo from "./assets/JSLogo.png"
import CSSLogo from "./assets/CSSLogo.png"
import HTMLLogo from "./assets/HTMLLogo.png"
import TailwindLogo from "./assets/TailwindLogo.png"
import PyLogo from "./assets/PYLogo.png"
import FlutterLogo from "./assets/FlutterLogo.png"
import TechnologyImage from "./TechnologyImage";

const Technologies = () => {
    return ( 
        <ul className="flex flex-wrap justify-center gap-y-4 gap-x-4 py-8">
          <TechnologyImage image={CLogo} alt={"C"}/>
          <TechnologyImage image={CPPLogo} alt={"C++"}/>
          <TechnologyImage image={JavaLogo} alt={"Java"}/>
          <TechnologyImage image={ReactLogo} alt={"React"}/>
          <TechnologyImage image={JSLogo} alt={"JS"}/>
          <TechnologyImage image={CSSLogo} alt={"CSS"}/>
          <TechnologyImage image={HTMLLogo} alt={"HTML"}/>
          <TechnologyImage image={TailwindLogo} alt={"TailwindCSS"}/>
          <TechnologyImage image={PyLogo} alt={"Python"}/>
          <TechnologyImage image={FlutterLogo} alt={"Flutter"}/>
        </ul>
     );
}
 
export default Technologies;