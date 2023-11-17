import * as Style from "./style";
import hidenImg from '/src/assets/images/hidenImg.jpg'
import logo03 from '/src/assets/logos/logo03.png'
import wpp from '/src/assets/logos/wpp.png'
import instagram from '/src/assets/logos/instagram.png'
import { handleWhatsAppRedirect } from "../../Utils/functions/linkToWpp.js"
import Part01 from './Components/Part01'
import Part02 from "./Components/Part02";
import Part03 from "./Components/Part03";
import Part04 from "./Components/Part04";
import Part05 from "./Components/Part05";
import { useEffect, useState } from "react";
import Part06 from "./Components/Part06";



const MainPage = () => {

    const [activeSection, setActiveSection] = useState('inicio');
    const [isScrollAtEdge, setIsScrollAtEdge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Verifica se o scroll está no topo ou no fundo
      if (scrollTop <= 150 || scrollTop + windowHeight >= documentHeight - 150) {
        setIsScrollAtEdge(true);
      } else {
        setIsScrollAtEdge(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMenuClick = (section, px) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
          const topOffset = element.offsetTop - px; // Considerar a margem superior
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      };

  

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ['inicio', 'our-mission', 'services', 'projects', 'contact'];

            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const section = document.getElementById(sectionId);

                if (section.offsetTop <= scrollPosition + 200) { // Adapte o valor '200' conforme necessário
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function hvToPx(hv) {
        const viewportHeight = window.innerHeight;
        return (hv * viewportHeight) / 100;
    }

    const widthJanela = window.innerWidth;
    
    function getValorWidthImagem() {
        
        if (widthJanela > 600) {
            return 100;
        } else {
            return 75;
        }
    }

    function getValorWidthImagemToService() {
        
        if (widthJanela > 600) {
            return 100;
        } else {
            return 138;
        }
    }

    const space = getValorWidthImagemToService() - hvToPx(50)

    const redirectToInstagram = () => {
        const instagramUsername = 'romaindustriais'; // Substitua pelo nome de usuário do perfil do Instagram desejado
        const instagramURL = `https://www.instagram.com/${instagramUsername}`;
        window.open(instagramURL, '_blank');
      };
    
    return (
        <Style.MainPage >
            <img className={`hidenImage ${isScrollAtEdge&&"blackBG"}`} src={hidenImg}></img>
            <header>
                <div onClick={() => handleMenuClick('inicio', getValorWidthImagem())}>
                    <img src={logo03}></img>
                </div>
                <div className="socialDiv">
                    <img onClick={redirectToInstagram} src={instagram}></img>
                    <img onClick={handleWhatsAppRedirect} src={wpp}></img>
                </div>
                <div className="hiddenOnPhone">
                    <p
                        className={activeSection === 'inicio' ? 'active' : ''}
                        onClick={() => handleMenuClick('inicio', getValorWidthImagem())}
                    >
                        Início
                    </p>
                    <p className={activeSection === 'our-mission' ? 'active' : ''}
                        onClick={() => handleMenuClick('our-mission', getValorWidthImagem())}
                    >
                        Nossa missão
                    </p>
                    {/* <p className={activeSection === 'about' ? 'active' : ''}
                        onClick={() => handleMenuClick('about', getValorWidthImagem())}
                    >
                        Sobre
                    </p> */}
                    <p className={activeSection === 'services' ? 'active' : ''}
                        onClick={() => handleMenuClick('services', space)}
                    >
                        Serviços
                    </p>
                    <p className={activeSection === 'projects' ? 'active' : ''}
                        onClick={() => handleMenuClick('projects', getValorWidthImagem())}
                    >
                        Projetos
                    </p>
                    <p className={activeSection === 'contact' ? 'active' : ''}
                        onClick={() => handleMenuClick('contact', getValorWidthImagem())}
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
                {/* <section id='about'>
                    <Part03 />
                </section> */}
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