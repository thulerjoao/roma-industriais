import * as Style from "./style";

const MainPage = () => {
    return (
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
            <body>
                <section className="part01">
                    <div>
                        <p>Decorando sonhos,</p>
                        <h2></h2>
                        <p>criando mundos.</p>
                        <img src='/src/assets/images/arrowDown.png'></img>
                    </div>
                </section>
                <section className="part02">nossa missao</section>
                <section className="part03">sobre</section>
                <section className="part04">servi~cos</section>
                <section className="part05">projetos</section>
            </body>
            <footer> final of the website</footer>
        </Style.MainPage>
    )
}

export default MainPage