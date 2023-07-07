import * as Style from "./style";

const MainPage = () =>{
    return(
        <Style.MainPage>
            <header>
                <div>
                    <img src='/src/assets/logos/logo03.png'></img>
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
            <body> main contet here</body>
            <footer> final of the website</footer>
        </Style.MainPage>
    )
}

export default MainPage