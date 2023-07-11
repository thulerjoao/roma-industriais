import * as Style from "./style";
import hidenImg from '/src/assets/images/hidenImg.jpg'
import logo03 from '/src/assets/logos/logo03.png'
import { handleWhatsAppRedirect } from "../../Utils/functions/linkToWpp.js"
import Part01 from './Components/Part01'
import Part02 from "./Components/Part02";
import Part03 from "./Components/Part03";
import Part04 from "./Components/Part04";
import Part05 from "./Components/Part05";
import { useState } from "react";
import Part06 from "./Components/Part06";



const MainPage = () => {

    const [activeSection, setActiveSection] = useState('inicio');
    
      const handleMenuClick = (section, px) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
          const topOffset = element.offsetTop - px; // Considerar a margem superior
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      };

      function hvToPx(hv) {
        const viewportHeight = window.innerHeight;
        return (hv * viewportHeight) / 100;
      }

      const space = 100 - hvToPx(50)

    return (
        <Style.MainPage>
            <img className="hidenImage" src={hidenImg}></img>
            <header>
                <div>
                    <img src={logo03}></img>
                </div>
                <div>
                    <p
                        className={activeSection === 'inicio' ? 'active' : ''}
                        onClick={() => handleMenuClick('inicio', 100)}
                    >
                        Início
                    </p>
                    <p className={activeSection === 'our-mission' ? 'active' : ''}
                        onClick={() => handleMenuClick('our-mission', 100)}
                    >
                        Nossa missão
                    </p>
                    <p className={activeSection === 'about' ? 'active' : ''}
                        onClick={() => handleMenuClick('about', 100)}
                    >
                        Sobre
                    </p>
                    <p className={activeSection === 'services' ? 'active' : ''}
                        onClick={() => handleMenuClick('services', space)}
                    >
                        Serviços
                    </p>
                    <p className={activeSection === 'projects' ? 'active' : ''}
                        onClick={() => handleMenuClick('projects', 100)}
                    >
                        Projetos
                    </p>
                    <p className={activeSection === 'contact' ? 'active' : ''}
                        onClick={() => handleMenuClick('contact', 100)}
                    >
                        Contato
                    </p>
                    <div className="budget" onClick={handleWhatsAppRedirect}
                    >Orçamento</div>
                </div>
            </header>
            <body>
                <section id='inicio'>
                    <Part01 />
                </section>
                <section id='our-mission'>
                    <Part02 />
                </section>
                <section id='about'>
                    <Part03 />
                </section>
                <section id='services'>
                    <Part04 />
                </section>
                <section id='projects'>
                    <Part05 />
                </section><section id='contact'>
                    <Part06 />
                </section>
            </body>
            <footer>© Roma Industriais | 2023 - Todos os direitos reservados</footer>
        </Style.MainPage>
    )
}

export default MainPage