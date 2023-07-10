import * as Style from "./style";
import hidenImg from '/src/assets/images/hidenImg.jpg'
import logo03 from '/src/assets/logos/logo03.png'
import Part01 from './Components/Part01'
import Part02 from "./Components/Part02";
import Part03 from "./Components/Part03";
import Part04 from "./Components/Part04";
import Part05 from "./Components/Part05";



const MainPage = () => {

    return (
        <Style.MainPage>
            <img className="hidenImage" src={hidenImg}></img>
            <header>
                <div>
                    <img src={logo03}></img>
                </div>
                <div>
                    <p>Início</p>
                    <p>Nossa missão</p>
                    <p>Sobre</p>
                    <p>Serviços</p>
                    <p>Projetos</p>
                    <div className="budget">Orçamento</div>
                </div>
            </header>
            <body>
                <Part01/>
                <Part02/>
                <Part03/>
                <Part04/>
                <Part05/>
            </body>
            <footer> final of the website</footer>
        </Style.MainPage>
    )
}

export default MainPage